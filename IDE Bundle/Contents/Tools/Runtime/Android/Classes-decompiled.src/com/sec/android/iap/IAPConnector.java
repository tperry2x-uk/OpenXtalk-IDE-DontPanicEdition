/*     */ package com.sec.android.iap;public interface IAPConnector extends IInterface { boolean requestCmd(IAPServiceCallback paramIAPServiceCallback, Bundle paramBundle) throws RemoteException;
/*     */   boolean unregisterCallback(IAPServiceCallback paramIAPServiceCallback) throws RemoteException;
/*     */   
/*     */   Bundle init(int paramInt) throws RemoteException;
/*     */   
/*     */   Bundle getItemList(int paramInt1, String paramString1, String paramString2, int paramInt2, int paramInt3, String paramString3) throws RemoteException;
/*     */   
/*     */   Bundle getItemsInbox(String paramString1, String paramString2, int paramInt1, int paramInt2, String paramString3, String paramString4) throws RemoteException;
/*     */   
/*     */   public static abstract class Stub extends Binder implements IAPConnector { private static final String DESCRIPTOR = "com.sec.android.iap.IAPConnector";
/*     */     static final int TRANSACTION_requestCmd = 1;
/*     */     static final int TRANSACTION_unregisterCallback = 2;
/*     */     
/*     */     public Stub() {
/*  15 */       attachInterface(this, "com.sec.android.iap.IAPConnector");
/*     */     }
/*     */     
/*     */     static final int TRANSACTION_init = 3;
/*     */     static final int TRANSACTION_getItemList = 4;
/*     */     static final int TRANSACTION_getItemsInbox = 5;
/*     */     
/*     */     public static IAPConnector asInterface(IBinder param1IBinder) {
/*  23 */       if (param1IBinder == null) {
/*  24 */         return null;
/*     */       }
/*  26 */       IInterface iInterface = param1IBinder.queryLocalInterface("com.sec.android.iap.IAPConnector");
/*  27 */       if (iInterface != null && iInterface instanceof IAPConnector) {
/*  28 */         return (IAPConnector)iInterface;
/*     */       }
/*  30 */       return new Proxy(param1IBinder);
/*     */     }
/*     */     
/*     */     public IBinder asBinder() {
/*  34 */       return (IBinder)this; } public boolean onTransact(int param1Int1, Parcel param1Parcel1, Parcel param1Parcel2, int param1Int2) throws RemoteException { IAPServiceCallback iAPServiceCallback; int i; String str1; Bundle bundle2; boolean bool1; Bundle bundle1; String str2; boolean bool2; String str3; int j; int k; int m;
/*     */       String str4;
/*     */       String str5;
/*     */       Bundle bundle3;
/*  38 */       switch (param1Int1) {
/*     */ 
/*     */         
/*     */         case 1598968902:
/*  42 */           param1Parcel2.writeString("com.sec.android.iap.IAPConnector");
/*  43 */           return true;
/*     */ 
/*     */         
/*     */         case 1:
/*  47 */           param1Parcel1.enforceInterface("com.sec.android.iap.IAPConnector");
/*     */           
/*  49 */           iAPServiceCallback = IAPServiceCallback.Stub.asInterface(param1Parcel1.readStrongBinder());
/*     */           
/*  51 */           if (0 != param1Parcel1.readInt()) {
/*  52 */             bundle2 = (Bundle)Bundle.CREATOR.createFromParcel(param1Parcel1);
/*     */           } else {
/*     */             
/*  55 */             bundle2 = null;
/*     */           } 
/*  57 */           bool2 = requestCmd(iAPServiceCallback, bundle2);
/*  58 */           param1Parcel2.writeNoException();
/*  59 */           param1Parcel2.writeInt(bool2 ? 1 : 0);
/*  60 */           return true;
/*     */ 
/*     */         
/*     */         case 2:
/*  64 */           param1Parcel1.enforceInterface("com.sec.android.iap.IAPConnector");
/*     */           
/*  66 */           iAPServiceCallback = IAPServiceCallback.Stub.asInterface(param1Parcel1.readStrongBinder());
/*  67 */           bool1 = unregisterCallback(iAPServiceCallback);
/*  68 */           param1Parcel2.writeNoException();
/*  69 */           param1Parcel2.writeInt(bool1 ? 1 : 0);
/*  70 */           return true;
/*     */ 
/*     */         
/*     */         case 3:
/*  74 */           param1Parcel1.enforceInterface("com.sec.android.iap.IAPConnector");
/*     */           
/*  76 */           i = param1Parcel1.readInt();
/*  77 */           bundle1 = init(i);
/*  78 */           param1Parcel2.writeNoException();
/*  79 */           if (bundle1 != null) {
/*  80 */             param1Parcel2.writeInt(1);
/*  81 */             bundle1.writeToParcel(param1Parcel2, 1);
/*     */           } else {
/*     */             
/*  84 */             param1Parcel2.writeInt(0);
/*     */           } 
/*  86 */           return true;
/*     */ 
/*     */         
/*     */         case 4:
/*  90 */           param1Parcel1.enforceInterface("com.sec.android.iap.IAPConnector");
/*     */           
/*  92 */           i = param1Parcel1.readInt();
/*     */           
/*  94 */           str2 = param1Parcel1.readString();
/*     */           
/*  96 */           str3 = param1Parcel1.readString();
/*     */           
/*  98 */           k = param1Parcel1.readInt();
/*     */           
/* 100 */           m = param1Parcel1.readInt();
/*     */           
/* 102 */           str5 = param1Parcel1.readString();
/* 103 */           bundle3 = getItemList(i, str2, str3, k, m, str5);
/* 104 */           param1Parcel2.writeNoException();
/* 105 */           if (bundle3 != null) {
/* 106 */             param1Parcel2.writeInt(1);
/* 107 */             bundle3.writeToParcel(param1Parcel2, 1);
/*     */           } else {
/*     */             
/* 110 */             param1Parcel2.writeInt(0);
/*     */           } 
/* 112 */           return true;
/*     */ 
/*     */         
/*     */         case 5:
/* 116 */           param1Parcel1.enforceInterface("com.sec.android.iap.IAPConnector");
/*     */           
/* 118 */           str1 = param1Parcel1.readString();
/*     */           
/* 120 */           str2 = param1Parcel1.readString();
/*     */           
/* 122 */           j = param1Parcel1.readInt();
/*     */           
/* 124 */           k = param1Parcel1.readInt();
/*     */           
/* 126 */           str4 = param1Parcel1.readString();
/*     */           
/* 128 */           str5 = param1Parcel1.readString();
/* 129 */           bundle3 = getItemsInbox(str1, str2, j, k, str4, str5);
/* 130 */           param1Parcel2.writeNoException();
/* 131 */           if (bundle3 != null) {
/* 132 */             param1Parcel2.writeInt(1);
/* 133 */             bundle3.writeToParcel(param1Parcel2, 1);
/*     */           } else {
/*     */             
/* 136 */             param1Parcel2.writeInt(0);
/*     */           } 
/* 138 */           return true;
/*     */       } 
/*     */       
/* 141 */       return super.onTransact(param1Int1, param1Parcel1, param1Parcel2, param1Int2); }
/*     */ 
/*     */     
/*     */     private static class Proxy implements IAPConnector {
/*     */       private IBinder mRemote;
/*     */       
/*     */       Proxy(IBinder param2IBinder) {
/* 148 */         this.mRemote = param2IBinder;
/*     */       }
/*     */       
/*     */       public IBinder asBinder() {
/* 152 */         return this.mRemote;
/*     */       }
/*     */       
/*     */       public String getInterfaceDescriptor() {
/* 156 */         return "com.sec.android.iap.IAPConnector";
/*     */       }
/*     */       public boolean requestCmd(IAPServiceCallback param2IAPServiceCallback, Bundle param2Bundle) throws RemoteException {
/*     */         boolean bool;
/* 160 */         Parcel parcel1 = Parcel.obtain();
/* 161 */         Parcel parcel2 = Parcel.obtain();
/*     */         
/*     */         try {
/* 164 */           parcel1.writeInterfaceToken("com.sec.android.iap.IAPConnector");
/* 165 */           parcel1.writeStrongBinder((param2IAPServiceCallback != null) ? param2IAPServiceCallback.asBinder() : null);
/* 166 */           if (param2Bundle != null) {
/* 167 */             parcel1.writeInt(1);
/* 168 */             param2Bundle.writeToParcel(parcel1, 0);
/*     */           } else {
/*     */             
/* 171 */             parcel1.writeInt(0);
/*     */           } 
/* 173 */           this.mRemote.transact(1, parcel1, parcel2, 0);
/* 174 */           parcel2.readException();
/* 175 */           bool = (0 != parcel2.readInt()) ? true : false;
/*     */         } finally {
/*     */           
/* 178 */           parcel2.recycle();
/* 179 */           parcel1.recycle();
/*     */         } 
/* 181 */         return bool;
/*     */       }
/*     */       public boolean unregisterCallback(IAPServiceCallback param2IAPServiceCallback) throws RemoteException {
/*     */         boolean bool;
/* 185 */         Parcel parcel1 = Parcel.obtain();
/* 186 */         Parcel parcel2 = Parcel.obtain();
/*     */         
/*     */         try {
/* 189 */           parcel1.writeInterfaceToken("com.sec.android.iap.IAPConnector");
/* 190 */           parcel1.writeStrongBinder((param2IAPServiceCallback != null) ? param2IAPServiceCallback.asBinder() : null);
/* 191 */           this.mRemote.transact(2, parcel1, parcel2, 0);
/* 192 */           parcel2.readException();
/* 193 */           bool = (0 != parcel2.readInt()) ? true : false;
/*     */         } finally {
/*     */           
/* 196 */           parcel2.recycle();
/* 197 */           parcel1.recycle();
/*     */         } 
/* 199 */         return bool;
/*     */       }
/*     */       public Bundle init(int param2Int) throws RemoteException {
/*     */         Bundle bundle;
/* 203 */         Parcel parcel1 = Parcel.obtain();
/* 204 */         Parcel parcel2 = Parcel.obtain();
/*     */         
/*     */         try {
/* 207 */           parcel1.writeInterfaceToken("com.sec.android.iap.IAPConnector");
/* 208 */           parcel1.writeInt(param2Int);
/* 209 */           this.mRemote.transact(3, parcel1, parcel2, 0);
/* 210 */           parcel2.readException();
/* 211 */           if (0 != parcel2.readInt()) {
/* 212 */             bundle = (Bundle)Bundle.CREATOR.createFromParcel(parcel2);
/*     */           } else {
/*     */             
/* 215 */             bundle = null;
/*     */           } 
/*     */         } finally {
/*     */           
/* 219 */           parcel2.recycle();
/* 220 */           parcel1.recycle();
/*     */         } 
/* 222 */         return bundle;
/*     */       }
/*     */       public Bundle getItemList(int param2Int1, String param2String1, String param2String2, int param2Int2, int param2Int3, String param2String3) throws RemoteException {
/*     */         Bundle bundle;
/* 226 */         Parcel parcel1 = Parcel.obtain();
/* 227 */         Parcel parcel2 = Parcel.obtain();
/*     */         
/*     */         try {
/* 230 */           parcel1.writeInterfaceToken("com.sec.android.iap.IAPConnector");
/* 231 */           parcel1.writeInt(param2Int1);
/* 232 */           parcel1.writeString(param2String1);
/* 233 */           parcel1.writeString(param2String2);
/* 234 */           parcel1.writeInt(param2Int2);
/* 235 */           parcel1.writeInt(param2Int3);
/* 236 */           parcel1.writeString(param2String3);
/* 237 */           this.mRemote.transact(4, parcel1, parcel2, 0);
/* 238 */           parcel2.readException();
/* 239 */           if (0 != parcel2.readInt()) {
/* 240 */             bundle = (Bundle)Bundle.CREATOR.createFromParcel(parcel2);
/*     */           } else {
/*     */             
/* 243 */             bundle = null;
/*     */           } 
/*     */         } finally {
/*     */           
/* 247 */           parcel2.recycle();
/* 248 */           parcel1.recycle();
/*     */         } 
/* 250 */         return bundle;
/*     */       }
/*     */       public Bundle getItemsInbox(String param2String1, String param2String2, int param2Int1, int param2Int2, String param2String3, String param2String4) throws RemoteException {
/*     */         Bundle bundle;
/* 254 */         Parcel parcel1 = Parcel.obtain();
/* 255 */         Parcel parcel2 = Parcel.obtain();
/*     */         
/*     */         try {
/* 258 */           parcel1.writeInterfaceToken("com.sec.android.iap.IAPConnector");
/* 259 */           parcel1.writeString(param2String1);
/* 260 */           parcel1.writeString(param2String2);
/* 261 */           parcel1.writeInt(param2Int1);
/* 262 */           parcel1.writeInt(param2Int2);
/* 263 */           parcel1.writeString(param2String3);
/* 264 */           parcel1.writeString(param2String4);
/* 265 */           this.mRemote.transact(5, parcel1, parcel2, 0);
/* 266 */           parcel2.readException();
/* 267 */           if (0 != parcel2.readInt()) {
/* 268 */             bundle = (Bundle)Bundle.CREATOR.createFromParcel(parcel2);
/*     */           } else {
/*     */             
/* 271 */             bundle = null;
/*     */           } 
/*     */         } finally {
/*     */           
/* 275 */           parcel2.recycle();
/* 276 */           parcel1.recycle();
/*     */         } 
/* 278 */         return bundle;
/*     */       }
/*     */     } }
/*     */    }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/sec/android/iap/IAPConnector.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */