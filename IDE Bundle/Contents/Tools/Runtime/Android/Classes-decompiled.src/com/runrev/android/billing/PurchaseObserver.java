/*    */ package com.runrev.android.billing;
/*    */ 
/*    */ import android.app.Activity;
/*    */ import android.app.PendingIntent;
/*    */ import android.content.Intent;
/*    */ import android.content.IntentSender;
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
/*    */ public abstract class PurchaseObserver
/*    */ {
/*    */   private static final String TAG = "PurchaseObserver";
/*    */   private final Activity mActivity;
/*    */   
/*    */   public PurchaseObserver(Activity paramActivity) {
/* 30 */     this.mActivity = paramActivity;
/*    */   }
/*    */ 
/*    */ 
/*    */   
/*    */   public abstract void onPurchaseStateChanged(String paramString, int paramInt);
/*    */ 
/*    */ 
/*    */   
/*    */   public abstract void onProductDetailsReceived(String paramString);
/*    */ 
/*    */   
/*    */   public abstract void onProductDetailsError(String paramString1, String paramString2);
/*    */ 
/*    */   
/*    */   void startBuyPageActivity(PendingIntent paramPendingIntent, Intent paramIntent) {
/*    */     try {
/* 47 */       this.mActivity.startIntentSender(paramPendingIntent.getIntentSender(), paramIntent, 0, 0, 0);
/*    */     }
/* 49 */     catch (android.content.IntentSender.SendIntentException sendIntentException) {}
/*    */   }
/*    */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/billing/PurchaseObserver.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */