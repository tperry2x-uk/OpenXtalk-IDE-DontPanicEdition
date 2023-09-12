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
/*    */ public class SkuDetails
/*    */ {
/*    */   String mItemType;
/*    */   String mSku;
/*    */   String mType;
/*    */   String mPrice;
/*    */   String mTitle;
/*    */   String mDescription;
/*    */   String mJson;
/*    */   
/*    */   public SkuDetails(String paramString) throws JSONException {
/* 34 */     this("inapp", paramString);
/*    */   }
/*    */   
/*    */   public SkuDetails(String paramString1, String paramString2) throws JSONException {
/* 38 */     this.mItemType = paramString1;
/* 39 */     this.mJson = paramString2;
/* 40 */     JSONObject jSONObject = new JSONObject(this.mJson);
/* 41 */     this.mSku = jSONObject.optString("productId");
/* 42 */     this.mType = jSONObject.optString("type");
/* 43 */     this.mPrice = jSONObject.optString("price");
/* 44 */     this.mTitle = jSONObject.optString("title");
/* 45 */     this.mDescription = jSONObject.optString("description");
/*    */   }
/*    */   
/* 48 */   public String getSku() { return this.mSku; }
/* 49 */   public String getType() { return this.mType; }
/* 50 */   public String getPrice() { return this.mPrice; }
/* 51 */   public String getTitle() { return this.mTitle; } public String getDescription() {
/* 52 */     return this.mDescription;
/*    */   }
/*    */   
/*    */   public String toString() {
/* 56 */     return "SkuDetails:" + this.mJson;
/*    */   }
/*    */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/billing/google/SkuDetails.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */