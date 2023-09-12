/*    */ package com.runrev.android.billing.google;
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
/*    */ public class IabResult
/*    */ {
/*    */   int mResponse;
/*    */   String mMessage;
/*    */   
/*    */   public IabResult(int paramInt, String paramString) {
/* 31 */     this.mResponse = paramInt;
/* 32 */     if (paramString == null || paramString.trim().length() == 0) {
/* 33 */       this.mMessage = IabHelper.getResponseDesc(paramInt);
/*    */     } else {
/*    */       
/* 36 */       this.mMessage = paramString + " (response: " + IabHelper.getResponseDesc(paramInt) + ")";
/*    */     } 
/*    */   }
/* 39 */   public int getResponse() { return this.mResponse; }
/* 40 */   public String getMessage() { return this.mMessage; }
/* 41 */   public boolean isSuccess() { return (this.mResponse == 0); }
/* 42 */   public boolean isFailure() { return !isSuccess(); } public String toString() {
/* 43 */     return "IabResult: " + getMessage();
/*    */   }
/*    */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/billing/google/IabResult.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */