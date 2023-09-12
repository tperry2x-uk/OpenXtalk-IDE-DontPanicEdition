/*    */ package com.runrev.android.billing;
/*    */ 
/*    */ import android.util.Log;
/*    */ import com.runrev.android.Engine;
/*    */ import java.lang.reflect.Constructor;
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ public class BillingModule
/*    */ {
/*    */   public static final String TAG = "BillingModule";
/*    */   
/*    */   public BillingProvider getBillingProvider() {
/* 35 */     if (!Engine.doGetCustomPropertyValue("cREVStandaloneSettings", "android,InAppPurchasing").equals("true")) {
/* 36 */       return null;
/*    */     }
/* 38 */     Log.d("BillingModule", "Fetching the billing provider...");
/* 39 */     String str = Engine.doGetCustomPropertyValue("cREVStandaloneSettings", "android,billingProvider");
/* 40 */     Log.d("BillingModule", "Provider is " + str);
/* 41 */     if (str.equals("Google"))
/* 42 */       return loadBillingProvider("com.runrev.android.billing.google.GoogleBillingProvider"); 
/* 43 */     if (str.equals("Amazon"))
/* 44 */       return loadBillingProvider("com.runrev.android.billing.amazon.AmazonBillingProvider"); 
/* 45 */     if (str.equals("Samsung")) {
/* 46 */       return loadBillingProvider("com.runrev.android.billing.samsung.SamsungBillingProvider");
/*    */     }
/* 48 */     return null;
/*    */   }
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */   
/*    */   private BillingProvider loadBillingProvider(String paramString) {
/*    */     try {
/* 57 */       Class<?> clazz = Class.forName(paramString);
/* 58 */       Constructor<?> constructor = clazz.getConstructor(new Class[0]);
/* 59 */       return (BillingProvider)constructor.newInstance(new Object[0]);
/*    */     }
/* 61 */     catch (Exception exception) {
/*    */       
/* 63 */       return null;
/*    */     } 
/*    */   }
/*    */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/billing/BillingModule.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */