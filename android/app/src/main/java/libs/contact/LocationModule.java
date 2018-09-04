package libs.contact;

import android.location.Address;
import android.location.Geocoder;
import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

public class LocationModule extends ReactContextBaseJavaModule {
    public  class  Country{
        String name;
        String shortName;

        public Country(String name, String shortName) {
            this.name = name;
            this.shortName = shortName;
        }
    }

    public LocationModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }


    private String getAddress(double lat, double lng) {
        ArrayList<Country> arr = new ArrayList<Country>();

        String addrs = "";
        Geocoder geocoder = new Geocoder(getReactApplicationContext(), Locale.getDefault());
        try {
            List<Address> addresses = geocoder.getFromLocation(lat, lng, 1);
            if (addresses != null && addresses.size() > 0) {
                Address returnedAddress = addresses.get(0);
                String featureName = returnedAddress.getFeatureName();

                String subAdminArea = returnedAddress.getSubAdminArea();
                if (subAdminArea != null && !subAdminArea.isEmpty()) {
                    addrs += returnedAddress.getSubAdminArea() + ", ";
                }
                String adminArea = returnedAddress.getAdminArea();
                if (adminArea != null && !adminArea.isEmpty()) {
                    addrs += returnedAddress.getAdminArea() + ", ";
                }
                String countryName = returnedAddress.getCountryName();
                if (countryName != null && !countryName.isEmpty()) {
                    addrs += returnedAddress.getCountryName();
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return addrs;
    }

    @ReactMethod
    public void getPlaceName(String data, final Callback callbackOk, final Callback callbackErr) {

        try {

            JSONObject jsonObject = new JSONObject(data);
            double lat = jsonObject.getDouble("lat");
            double lng = jsonObject.getDouble("lng");
            Log.e("xxxxx",getAddress(lat, lng));
            callbackOk.invoke(getAddress(lat, lng));

        } catch (JSONException e) {
            e.printStackTrace();
            callbackErr.invoke("err");

        }

    }

    @Override
    public String getName() {
        return "LocationModule";
    }
}
