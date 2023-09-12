/*    */ package com.sec.android.iap;
/*    */ 
/*    */ import android.os.Binder;
/*    */ import android.os.Bundle;
/*    */ import android.os.IBinder;
/*    */ import android.os.IInterface;
/*    */ import android.os.Parcel;
/*    */ import android.os.RemoteException;
/*    */ 
/*    */ public interface IAPServiceCallback extends IInterface {
/*    */   void responseCallback(Bundle paramBundle) throws RemoteException;
/*    */   
/*    */   public static abstract class Stub extends Binder implements IAPServiceCallback {
/*    */     public Stub() {
/* 15 */       attachInterface(this, "com.sec.android.iap.IAPServiceCallback");
/*    */     }
/*    */ 
/*    */     
/*    */     private static final String DESCRIPTOR = "com.sec.android.iap.IAPServiceCallback";
/*    */     static final int TRANSACTION_responseCallback = 1;
/*    */     
/*    */     public static IAPServiceCallback asInterface(IBinder param1IBinder) {
/* 23 */       if (param1IBinder == null) {
/* 24 */         return null;
/*    */       }
/* 26 */       IInterface iInterface = param1IBinder.queryLocalInterface("com.sec.android.iap.IAPServiceCallback");
/* 27 */       if (iInterface != null && iInterface instanceof IAPServiceCallback) {
/* 28 */         return (IAPServiceCallback)iInterface;
/*    */       }
/* 30 */       return new Proxy(param1IBinder);
/*    */     }
/*    */     
/*    */     public IBinder asBinder() {
/* 34 */       return (IBinder)this;
/*    */     }
/*    */     public boolean onTransact(int param1Int1, Parcel param1Parcel1, Parcel param1Parcel2, int param1Int2) throws RemoteException {
/*    */       Bundle bundle;
/* 38 */       switch (param1Int1) {
/*    */ 
/*    */         
/*    */         case 1598968902:
/* 42 */           param1Parcel2.writeString("com.sec.android.iap.IAPServiceCallback");
/* 43 */           return true;
/*    */ 
/*    */         
/*    */         case 1:
/* 47 */           param1Parcel1.enforceInterface("com.sec.android.iap.IAPServiceCallback");
/*    */           
/* 49 */           if (0 != param1Parcel1.readInt()) {
/* 50 */             bundle = (Bundle)Bundle.CREATOR.createFromParcel(param1Parcel1);
/*    */           } else {
/*    */             
/* 53 */             bundle = null;
/*    */           } 
/* 55 */           responseCallback(bundle);
/* 56 */           return true;
/*    */       } 
/*    */       
/* 59 */       return super.onTransact(param1Int1, param1Parcel1, param1Parcel2, param1Int2);
/*    */     }
/*    */     
/*    */     private static class Proxy implements IAPServiceCallback {
/*    */       private IBinder mRemote;
/*    */       
/*    */       Proxy(IBinder param2IBinder) {
/* 66 */         this.mRemote = param2IBinder;
/*    */       }
/*    */       
/*    */       public IBinder asBinder() {
/* 70 */         return this.mRemote;
/*    */       }
/*    */       
/*    */       public String getInterfaceDescriptor() {
/* 74 */         return "com.sec.android.iap.IAPServiceCallback";
/*    */       }
/*    */       
/*    */       public void responseCallback(Bundle param2Bundle) throws RemoteException {
/* 78 */         Parcel parcel = Parcel.obtain();
/*    */         try {
/* 80 */           parcel.writeInterfaceToken("com.sec.android.iap.IAPServiceCallback");
/* 81 */           if (param2Bundle != null) {
/* 82 */             parcel.writeInt(1);
/* 83 */             param2Bundle.writeToParcel(parcel, 0);
/*    */           } else {
/*    */             
/* 86 */             parcel.writeInt(0);
/*    */           } 
/* 88 */           this.mRemote.transact(1, parcel, null, 1);
/*    */         } finally {
/*    */           
/* 91 */           parcel.recycle();
/*    */         } 
/*    */       }
/*    */     }
/*    */   }
/*    */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/sec/android/iap/IAPServiceCallback.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */