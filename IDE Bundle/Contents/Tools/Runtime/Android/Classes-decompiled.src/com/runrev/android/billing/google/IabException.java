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
/*    */ public class IabException
/*    */   extends Exception
/*    */ {
/*    */   private static final long serialVersionUID = -7238205509940581401L;
/*    */   IabResult mResult;
/*    */   
/*    */   public IabException(IabResult paramIabResult) {
/* 30 */     this(paramIabResult, (Exception)null);
/*    */   }
/*    */   public IabException(int paramInt, String paramString) {
/* 33 */     this(new IabResult(paramInt, paramString));
/*    */   }
/*    */   public IabException(IabResult paramIabResult, Exception paramException) {
/* 36 */     super(paramIabResult.getMessage(), paramException);
/* 37 */     this.mResult = paramIabResult;
/*    */   }
/*    */   public IabException(int paramInt, String paramString, Exception paramException) {
/* 40 */     this(new IabResult(paramInt, paramString), paramException);
/*    */   }
/*    */   
/*    */   public IabResult getResult() {
/* 44 */     return this.mResult;
/*    */   }
/*    */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/billing/google/IabException.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */