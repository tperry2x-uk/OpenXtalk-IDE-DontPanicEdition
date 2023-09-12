/*     */ package com.android.vending.billing;
/*     */ 
/*     */ import android.os.Binder;
/*     */ import android.os.Bundle;
/*     */ import android.os.IBinder;
/*     */ import android.os.IInterface;
/*     */ import android.os.Parcel;
/*     */ import android.os.RemoteException;
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ public interface IInAppBillingService
/*     */   extends IInterface
/*     */ {
/*     */   int isBillingSupported(int paramInt, String paramString1, String paramString2) throws RemoteException;
/*     */   
/*     */   Bundle getSkuDetails(int paramInt, String paramString1, String paramString2, Bundle paramBundle) throws RemoteException;
/*     */   
/*     */   Bundle getBuyIntent(int paramInt, String paramString1, String paramString2, String paramString3, String paramString4) throws RemoteException;
/*     */   
/*     */   Bundle getPurchases(int paramInt, String paramString1, String paramString2, String paramString3) throws RemoteException;
/*     */   
/*     */   int consumePurchase(int paramInt, String paramString1, String paramString2) throws RemoteException;
/*     */   
/*     */   public static abstract class Stub
/*     */     extends Binder
/*     */     implements IInAppBillingService
/*     */   {
/*     */     private static final String DESCRIPTOR = "com.android.vending.billing.IInAppBillingService";
/*     */     static final int TRANSACTION_isBillingSupported = 1;
/*     */     static final int TRANSACTION_getSkuDetails = 2;
/*     */     static final int TRANSACTION_getBuyIntent = 3;
/*     */     static final int TRANSACTION_getPurchases = 4;
/*     */     static final int TRANSACTION_consumePurchase = 5;
/*     */     
/*     */     public Stub() {
/*  39 */       attachInterface(this, "com.android.vending.billing.IInAppBillingService");
/*     */     }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */     
/*     */     public static IInAppBillingService asInterface(IBinder param1IBinder) {
/*  47 */       if (param1IBinder == null) {
/*  48 */         return null;
/*     */       }
/*  50 */       IInterface iInterface = param1IBinder.queryLocalInterface("com.android.vending.billing.IInAppBillingService");
/*  51 */       if (iInterface != null && iInterface instanceof IInAppBillingService) {
/*  52 */         return (IInAppBillingService)iInterface;
/*     */       }
/*  54 */       return new Proxy(param1IBinder);
/*     */     }
/*     */     
/*     */     public IBinder asBinder() {
/*  58 */       return (IBinder)this; } public boolean onTransact(int param1Int1, Parcel param1Parcel1, Parcel param1Parcel2, int param1Int2) throws RemoteException { int i; String str1; String str2; int k; Bundle bundle1; String str3; int j; Bundle bundle3;
/*     */       String str4;
/*     */       Bundle bundle2;
/*     */       Bundle bundle4;
/*  62 */       switch (param1Int1) {
/*     */ 
/*     */         
/*     */         case 1598968902:
/*  66 */           param1Parcel2.writeString("com.android.vending.billing.IInAppBillingService");
/*  67 */           return true;
/*     */ 
/*     */         
/*     */         case 1:
/*  71 */           param1Parcel1.enforceInterface("com.android.vending.billing.IInAppBillingService");
/*     */           
/*  73 */           i = param1Parcel1.readInt();
/*     */           
/*  75 */           str1 = param1Parcel1.readString();
/*     */           
/*  77 */           str2 = param1Parcel1.readString();
/*  78 */           k = isBillingSupported(i, str1, str2);
/*  79 */           param1Parcel2.writeNoException();
/*  80 */           param1Parcel2.writeInt(k);
/*  81 */           return true;
/*     */ 
/*     */         
/*     */         case 2:
/*  85 */           param1Parcel1.enforceInterface("com.android.vending.billing.IInAppBillingService");
/*     */           
/*  87 */           i = param1Parcel1.readInt();
/*     */           
/*  89 */           str1 = param1Parcel1.readString();
/*     */           
/*  91 */           str2 = param1Parcel1.readString();
/*     */           
/*  93 */           if (0 != param1Parcel1.readInt()) {
/*  94 */             bundle1 = (Bundle)Bundle.CREATOR.createFromParcel(param1Parcel1);
/*     */           } else {
/*     */             
/*  97 */             bundle1 = null;
/*     */           } 
/*  99 */           bundle3 = getSkuDetails(i, str1, str2, bundle1);
/* 100 */           param1Parcel2.writeNoException();
/* 101 */           if (bundle3 != null) {
/* 102 */             param1Parcel2.writeInt(1);
/* 103 */             bundle3.writeToParcel(param1Parcel2, 1);
/*     */           } else {
/*     */             
/* 106 */             param1Parcel2.writeInt(0);
/*     */           } 
/* 108 */           return true;
/*     */ 
/*     */         
/*     */         case 3:
/* 112 */           param1Parcel1.enforceInterface("com.android.vending.billing.IInAppBillingService");
/*     */           
/* 114 */           i = param1Parcel1.readInt();
/*     */           
/* 116 */           str1 = param1Parcel1.readString();
/*     */           
/* 118 */           str2 = param1Parcel1.readString();
/*     */           
/* 120 */           str3 = param1Parcel1.readString();
/*     */           
/* 122 */           str4 = param1Parcel1.readString();
/* 123 */           bundle4 = getBuyIntent(i, str1, str2, str3, str4);
/* 124 */           param1Parcel2.writeNoException();
/* 125 */           if (bundle4 != null) {
/* 126 */             param1Parcel2.writeInt(1);
/* 127 */             bundle4.writeToParcel(param1Parcel2, 1);
/*     */           } else {
/*     */             
/* 130 */             param1Parcel2.writeInt(0);
/*     */           } 
/* 132 */           return true;
/*     */ 
/*     */         
/*     */         case 4:
/* 136 */           param1Parcel1.enforceInterface("com.android.vending.billing.IInAppBillingService");
/*     */           
/* 138 */           i = param1Parcel1.readInt();
/*     */           
/* 140 */           str1 = param1Parcel1.readString();
/*     */           
/* 142 */           str2 = param1Parcel1.readString();
/*     */           
/* 144 */           str3 = param1Parcel1.readString();
/* 145 */           bundle2 = getPurchases(i, str1, str2, str3);
/* 146 */           param1Parcel2.writeNoException();
/* 147 */           if (bundle2 != null) {
/* 148 */             param1Parcel2.writeInt(1);
/* 149 */             bundle2.writeToParcel(param1Parcel2, 1);
/*     */           } else {
/*     */             
/* 152 */             param1Parcel2.writeInt(0);
/*     */           } 
/* 154 */           return true;
/*     */ 
/*     */         
/*     */         case 5:
/* 158 */           param1Parcel1.enforceInterface("com.android.vending.billing.IInAppBillingService");
/*     */           
/* 160 */           i = param1Parcel1.readInt();
/*     */           
/* 162 */           str1 = param1Parcel1.readString();
/*     */           
/* 164 */           str2 = param1Parcel1.readString();
/* 165 */           j = consumePurchase(i, str1, str2);
/* 166 */           param1Parcel2.writeNoException();
/* 167 */           param1Parcel2.writeInt(j);
/* 168 */           return true;
/*     */       } 
/*     */       
/* 171 */       return super.onTransact(param1Int1, param1Parcel1, param1Parcel2, param1Int2); }
/*     */ 
/*     */     
/*     */     private static class Proxy implements IInAppBillingService {
/*     */       private IBinder mRemote;
/*     */       
/*     */       Proxy(IBinder param2IBinder) {
/* 178 */         this.mRemote = param2IBinder;
/*     */       }
/*     */       
/*     */       public IBinder asBinder() {
/* 182 */         return this.mRemote;
/*     */       }
/*     */       
/*     */       public String getInterfaceDescriptor() {
/* 186 */         return "com.android.vending.billing.IInAppBillingService";
/*     */       }
/*     */       public int isBillingSupported(int param2Int, String param2String1, String param2String2) throws RemoteException {
/*     */         int i;
/* 190 */         Parcel parcel1 = Parcel.obtain();
/* 191 */         Parcel parcel2 = Parcel.obtain();
/*     */         
/*     */         try {
/* 194 */           parcel1.writeInterfaceToken("com.android.vending.billing.IInAppBillingService");
/* 195 */           parcel1.writeInt(param2Int);
/* 196 */           parcel1.writeString(param2String1);
/* 197 */           parcel1.writeString(param2String2);
/* 198 */           this.mRemote.transact(1, parcel1, parcel2, 0);
/* 199 */           parcel2.readException();
/* 200 */           i = parcel2.readInt();
/*     */         } finally {
/*     */           
/* 203 */           parcel2.recycle();
/* 204 */           parcel1.recycle();
/*     */         } 
/* 206 */         return i;
/*     */       }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */       
/*     */       public Bundle getSkuDetails(int param2Int, String param2String1, String param2String2, Bundle param2Bundle) throws RemoteException {
/*     */         Bundle bundle;
/* 226 */         Parcel parcel1 = Parcel.obtain();
/* 227 */         Parcel parcel2 = Parcel.obtain();
/*     */         
/*     */         try {
/* 230 */           parcel1.writeInterfaceToken("com.android.vending.billing.IInAppBillingService");
/* 231 */           parcel1.writeInt(param2Int);
/* 232 */           parcel1.writeString(param2String1);
/* 233 */           parcel1.writeString(param2String2);
/* 234 */           if (param2Bundle != null) {
/* 235 */             parcel1.writeInt(1);
/* 236 */             param2Bundle.writeToParcel(parcel1, 0);
/*     */           } else {
/*     */             
/* 239 */             parcel1.writeInt(0);
/*     */           } 
/* 241 */           this.mRemote.transact(2, parcel1, parcel2, 0);
/* 242 */           parcel2.readException();
/* 243 */           if (0 != parcel2.readInt()) {
/* 244 */             bundle = (Bundle)Bundle.CREATOR.createFromParcel(parcel2);
/*     */           } else {
/*     */             
/* 247 */             bundle = null;
/*     */           } 
/*     */         } finally {
/*     */           
/* 251 */           parcel2.recycle();
/* 252 */           parcel1.recycle();
/*     */         } 
/* 254 */         return bundle;
/*     */       }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */       
/*     */       public Bundle getBuyIntent(int param2Int, String param2String1, String param2String2, String param2String3, String param2String4) throws RemoteException {
/*     */         Bundle bundle;
/* 288 */         Parcel parcel1 = Parcel.obtain();
/* 289 */         Parcel parcel2 = Parcel.obtain();
/*     */         
/*     */         try {
/* 292 */           parcel1.writeInterfaceToken("com.android.vending.billing.IInAppBillingService");
/* 293 */           parcel1.writeInt(param2Int);
/* 294 */           parcel1.writeString(param2String1);
/* 295 */           parcel1.writeString(param2String2);
/* 296 */           parcel1.writeString(param2String3);
/* 297 */           parcel1.writeString(param2String4);
/* 298 */           this.mRemote.transact(3, parcel1, parcel2, 0);
/* 299 */           parcel2.readException();
/* 300 */           if (0 != parcel2.readInt()) {
/* 301 */             bundle = (Bundle)Bundle.CREATOR.createFromParcel(parcel2);
/*     */           } else {
/*     */             
/* 304 */             bundle = null;
/*     */           } 
/*     */         } finally {
/*     */           
/* 308 */           parcel2.recycle();
/* 309 */           parcel1.recycle();
/*     */         } 
/* 311 */         return bundle;
/*     */       }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */       
/*     */       public Bundle getPurchases(int param2Int, String param2String1, String param2String2, String param2String3) throws RemoteException {
/*     */         Bundle bundle;
/* 339 */         Parcel parcel1 = Parcel.obtain();
/* 340 */         Parcel parcel2 = Parcel.obtain();
/*     */         
/*     */         try {
/* 343 */           parcel1.writeInterfaceToken("com.android.vending.billing.IInAppBillingService");
/* 344 */           parcel1.writeInt(param2Int);
/* 345 */           parcel1.writeString(param2String1);
/* 346 */           parcel1.writeString(param2String2);
/* 347 */           parcel1.writeString(param2String3);
/* 348 */           this.mRemote.transact(4, parcel1, parcel2, 0);
/* 349 */           parcel2.readException();
/* 350 */           if (0 != parcel2.readInt()) {
/* 351 */             bundle = (Bundle)Bundle.CREATOR.createFromParcel(parcel2);
/*     */           } else {
/*     */             
/* 354 */             bundle = null;
/*     */           } 
/*     */         } finally {
/*     */           
/* 358 */           parcel2.recycle();
/* 359 */           parcel1.recycle();
/*     */         } 
/* 361 */         return bundle;
/*     */       }
/*     */       public int consumePurchase(int param2Int, String param2String1, String param2String2) throws RemoteException {
/*     */         int i;
/* 365 */         Parcel parcel1 = Parcel.obtain();
/* 366 */         Parcel parcel2 = Parcel.obtain();
/*     */         
/*     */         try {
/* 369 */           parcel1.writeInterfaceToken("com.android.vending.billing.IInAppBillingService");
/* 370 */           parcel1.writeInt(param2Int);
/* 371 */           parcel1.writeString(param2String1);
/* 372 */           parcel1.writeString(param2String2);
/* 373 */           this.mRemote.transact(5, parcel1, parcel2, 0);
/* 374 */           parcel2.readException();
/* 375 */           i = parcel2.readInt();
/*     */         } finally {
/*     */           
/* 378 */           parcel2.recycle();
/* 379 */           parcel1.recycle();
/*     */         } 
/* 381 */         return i;
/*     */       }
/*     */     }
/*     */   }
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/android/vending/billing/IInAppBillingService.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */