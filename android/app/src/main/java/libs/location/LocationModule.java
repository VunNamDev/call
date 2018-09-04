package libs.location;

import android.Manifest;
import android.annotation.SuppressLint;
import android.content.ContentProviderOperation;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.location.Address;
import android.location.Geocoder;
import android.location.Location;
import android.net.Uri;
import android.provider.ContactsContract;
import android.support.annotation.NonNull;
import android.support.v4.content.ContextCompat;
import android.util.Log;
import android.widget.Toast;

import com.call.MainApplication;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import org.json.JSONException;
import org.json.JSONObject;

import java.lang.reflect.Array;
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
    @ReactMethod
    public  void addAsContactAutomatic(final String mobileNumber) {

        Intent i = new Intent(Intent.ACTION_INSERT_OR_EDIT);
        i.setType(ContactsContract.Contacts.CONTENT_ITEM_TYPE);
        i.putExtra(ContactsContract.Intents.Insert.PHONE,mobileNumber);
        getCurrentActivity().startActivity(i);
    }
    public String getName() {
        return "LocationModule";
    }
}
