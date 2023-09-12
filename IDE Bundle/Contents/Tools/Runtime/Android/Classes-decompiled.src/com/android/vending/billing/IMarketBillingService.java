/*     */ package com.android.vending.billing;
/*     */ 
/*     */ import android.os.Binder;
/*     */ import android.os.Bundle;
/*     */ import android.os.IBinder;
/*     */ import android.os.IInterface;
/*     */ import android.os.Parcel;
/*     */ import android.os.RemoteException;
/*     */ 
/*     */ public interface IMarketBillingService extends IInterface {
/*     */   Bundle sendBillingRequest(Bundle paramBundle) throws RemoteException;
/*     */   
/*     */   public static abstract class Stub extends Binder implements IMarketBillingService {
/*     */     public Stub() {
/*  15 */       attachInterface(this, "com.android.vending.billing.IMarketBillingService");
/*     */     }
/*     */ 
/*     */     
/*     */     private static final String DESCRIPTOR = "com.android.vending.billing.IMarketBillingService";
/*     */     static final int TRANSACTION_sendBillingRequest = 1;
/*     */     
/*     */     public static IMarketBillingService asInterface(IBinder param1IBinder) {
/*  23 */       if (param1IBinder == null) {
/*  24 */         return null;
/*     */       }
/*  26 */       IInterface iInterface = param1IBinder.queryLocalInterface("com.android.vending.billing.IMarketBillingService");
/*  27 */       if (iInterface != null && iInterface instanceof IMarketBillingService) {
/*  28 */         return (IMarketBillingService)iInterface;
/*     */       }
/*  30 */       return new Proxy(param1IBinder);
/*     */     }
/*     */     
/*     */     public IBinder asBinder() {
/*  34 */       return (IBinder)this;
/*     */     } public boolean onTransact(int param1Int1, Parcel param1Parcel1, Parcel param1Parcel2, int param1Int2) throws RemoteException {
/*     */       Bundle bundle1;
/*     */       Bundle bundle2;
/*  38 */       switch (param1Int1) {
/*     */ 
/*     */         
/*     */         case 1598968902:
/*  42 */           param1Parcel2.writeString("com.android.vending.billing.IMarketBillingService");
/*  43 */           return true;
/*     */ 
/*     */         
/*     */         case 1:
/*  47 */           param1Parcel1.enforceInterface("com.android.vending.billing.IMarketBillingService");
/*     */           
/*  49 */           if (0 != param1Parcel1.readInt()) {
/*  50 */             bundle1 = (Bundle)Bundle.CREATOR.createFromParcel(param1Parcel1);
/*     */           } else {
/*     */             
/*  53 */             bundle1 = null;
/*     */           } 
/*  55 */           bundle2 = sendBillingRequest(bundle1);
/*  56 */           param1Parcel2.writeNoException();
/*  57 */           if (bundle2 != null) {
/*  58 */             param1Parcel2.writeInt(1);
/*  59 */             bundle2.writeToParcel(param1Parcel2, 1);
/*     */           } else {
/*     */             
/*  62 */             param1Parcel2.writeInt(0);
/*     */           } 
/*  64 */           return true;
/*     */       } 
/*     */       
/*  67 */       return super.onTransact(param1Int1, param1Parcel1, param1Parcel2, param1Int2);
/*     */     }
/*     */     
/*     */     private static class Proxy implements IMarketBillingService {
/*     */       private IBinder mRemote;
/*     */       
/*     */       Proxy(IBinder param2IBinder) {
/*  74 */         this.mRemote = param2IBinder;
/*     */       }
/*     */       
/*     */       public IBinder asBinder() {
/*  78 */         return this.mRemote;
/*     */       }
/*     */       
/*     */       public String getInterfaceDescriptor() {
/*  82 */         return "com.android.vending.billing.IMarketBillingService";
/*     */       }
/*     */       
/*     */       public Bundle sendBillingRequest(Bundle param2Bundle) throws RemoteException {
/*     */         Bundle bundle;
/*  87 */         Parcel parcel1 = Parcel.obtain();
/*  88 */         Parcel parcel2 = Parcel.obtain();
/*     */         
/*     */         try {
/*  91 */           parcel1.writeInterfaceToken("com.android.vending.billing.IMarketBillingService");
/*  92 */           if (param2Bundle != null) {
/*  93 */             parcel1.writeInt(1);
/*  94 */             param2Bundle.writeToParcel(parcel1, 0);
/*     */           } else {
/*     */             
/*  97 */             parcel1.writeInt(0);
/*     */           } 
/*  99 */           this.mRemote.transact(1, parcel1, parcel2, 0);
/* 100 */           parcel2.readException();
/* 101 */           if (0 != parcel2.readInt()) {
/* 102 */             bundle = (Bundle)Bundle.CREATOR.createFromParcel(parcel2);
/*     */           } else {
/*     */             
/* 105 */             bundle = null;
/*     */           } 
/*     */         } finally {
/*     */           
/* 109 */           parcel2.recycle();
/* 110 */           parcel1.recycle();
/*     */         } 
/* 112 */         return bundle;
/*     */       }
/*     */     }
/*     */   }
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/android/vending/billing/IMarketBillingService.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */