/*    */ package com.runrev.android.billing.google;
/*    */ 
/*    */ import org.json.JSONException;
/*    */ import org.json.JSONObject;
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
/*    */ public class Purchase
/*    */ {
/*    */   String mItemType;
/*    */   String mOrderId;
/*    */   String mPackageName;
/*    */   String mSku;
/*    */   long mPurchaseTime;
/*    */   int mPurchaseState;
/*    */   String mDeveloperPayload;
/*    */   String mToken;
/*    */   String mOriginalJson;
/*    */   String mSignature;
/*    */   
/*    */   public Purchase(String paramString1, String paramString2, String paramString3) throws JSONException {
/* 37 */     this.mItemType = paramString1;
/* 38 */     this.mOriginalJson = paramString2;
/* 39 */     JSONObject jSONObject = new JSONObject(this.mOriginalJson);
/* 40 */     this.mOrderId = jSONObject.optString("orderId");
/* 41 */     this.mPackageName = jSONObject.optString("packageName");
/* 42 */     this.mSku = jSONObject.optString("productId");
/* 43 */     this.mPurchaseTime = jSONObject.optLong("purchaseTime");
/* 44 */     this.mPurchaseState = jSONObject.optInt("purchaseState");
/* 45 */     this.mDeveloperPayload = jSONObject.optString("developerPayload");
/* 46 */     this.mToken = jSONObject.optString("token", jSONObject.optString("purchaseToken"));
/* 47 */     this.mSignature = paramString3;
/*    */   }
/*    */   
/* 50 */   public String getItemType() { return this.mItemType; }
/* 51 */   public String getOrderId() { return this.mOrderId; }
/* 52 */   public String getPackageName() { return this.mPackageName; }
/* 53 */   public String getSku() { return this.mSku; }
/* 54 */   public long getPurchaseTime() { return this.mPurchaseTime; }
/* 55 */   public int getPurchaseState() { return this.mPurchaseState; }
/* 56 */   public String getDeveloperPayload() { return this.mDeveloperPayload; }
/* 57 */   public String getToken() { return this.mToken; }
/* 58 */   public String getOriginalJson() { return this.mOriginalJson; } public String getSignature() {
/* 59 */     return this.mSignature;
/*    */   }
/*    */   public String toString() {
/* 62 */     return "PurchaseInfo(type:" + this.mItemType + "):" + this.mOriginalJson;
/*    */   }
/*    */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/billing/google/Purchase.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */