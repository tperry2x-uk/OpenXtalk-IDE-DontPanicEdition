package com.runrev.android.billing;

import android.app.Activity;
import android.content.Intent;

public interface BillingProvider {
  boolean canMakePurchase();
  
  boolean enableUpdates();
  
  boolean disableUpdates();
  
  boolean restorePurchases();
  
  boolean sendRequest(int paramInt, String paramString1, String paramString2);
  
  boolean consumePurchase(String paramString);
  
  boolean requestProductDetails(String paramString);
  
  String receiveProductDetails(String paramString);
  
  boolean makePurchase(String paramString1, String paramString2, String paramString3);
  
  boolean productSetType(String paramString1, String paramString2);
  
  boolean setPurchaseProperty(String paramString1, String paramString2, String paramString3);
  
  String getPurchaseProperty(String paramString1, String paramString2);
  
  String getPurchaseList();
  
  boolean confirmDelivery(int paramInt);
  
  void setPurchaseObserver(PurchaseObserver paramPurchaseObserver);
  
  void setActivity(Activity paramActivity);
  
  void initBilling();
  
  void onDestroy();
  
  void onActivityResult(int paramInt1, int paramInt2, Intent paramIntent);
  
  public static class Log {
    static final boolean LOG = false;
    
    public static void i(String param1String1, String param1String2) {}
    
    public static void d(String param1String1, String param1String2) {}
    
    public static void v(String param1String1, String param1String2) {}
    
    public static void e(String param1String1, String param1String2) {}
  }
}


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/billing/BillingProvider.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */