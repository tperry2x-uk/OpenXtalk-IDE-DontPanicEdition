/*      */ package com.runrev.android.billing.google;
/*      */ 
/*      */ import android.app.Activity;
/*      */ import android.app.PendingIntent;
/*      */ import android.content.ComponentName;
/*      */ import android.content.Context;
/*      */ import android.content.Intent;
/*      */ import android.content.IntentSender;
/*      */ import android.content.ServiceConnection;
/*      */ import android.os.Bundle;
/*      */ import android.os.Handler;
/*      */ import android.os.IBinder;
/*      */ import android.os.RemoteException;
/*      */ import android.text.TextUtils;
/*      */ import android.util.Log;
/*      */ import com.android.vending.billing.IInAppBillingService;
/*      */ import java.util.ArrayList;
/*      */ import java.util.List;
/*      */ import org.json.JSONException;
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ public class IabHelper
/*      */ {
/*      */   boolean mDebugLog = false;
/*   75 */   String mDebugTag = "IabHelper";
/*      */ 
/*      */ 
/*      */   
/*      */   boolean mSetupDone = false;
/*      */ 
/*      */ 
/*      */   
/*      */   boolean mDisposed = false;
/*      */ 
/*      */   
/*      */   boolean mSubscriptionsSupported = false;
/*      */ 
/*      */   
/*      */   boolean mAsyncInProgress = false;
/*      */ 
/*      */   
/*   92 */   String mAsyncOperation = "";
/*      */ 
/*      */   
/*      */   Context mContext;
/*      */ 
/*      */   
/*      */   IInAppBillingService mService;
/*      */ 
/*      */   
/*      */   ServiceConnection mServiceConn;
/*      */ 
/*      */   
/*      */   int mRequestCode;
/*      */   
/*      */   String mPurchasingItemType;
/*      */   
/*  108 */   String mSignatureBase64 = null;
/*      */   
/*      */   public static final int BILLING_RESPONSE_RESULT_OK = 0;
/*      */   
/*      */   public static final int BILLING_RESPONSE_RESULT_USER_CANCELED = 1;
/*      */   
/*      */   public static final int BILLING_RESPONSE_RESULT_BILLING_UNAVAILABLE = 3;
/*      */   
/*      */   public static final int BILLING_RESPONSE_RESULT_ITEM_UNAVAILABLE = 4;
/*      */   
/*      */   public static final int BILLING_RESPONSE_RESULT_DEVELOPER_ERROR = 5;
/*      */   
/*      */   public static final int BILLING_RESPONSE_RESULT_ERROR = 6;
/*      */   
/*      */   public static final int BILLING_RESPONSE_RESULT_ITEM_ALREADY_OWNED = 7;
/*      */   
/*      */   public static final int BILLING_RESPONSE_RESULT_ITEM_NOT_OWNED = 8;
/*      */   
/*      */   public static final int IABHELPER_ERROR_BASE = -1000;
/*      */   
/*      */   public static final int IABHELPER_REMOTE_EXCEPTION = -1001;
/*      */   
/*      */   public static final int IABHELPER_BAD_RESPONSE = -1002;
/*      */   
/*      */   public static final int IABHELPER_VERIFICATION_FAILED = -1003;
/*      */   
/*      */   public static final int IABHELPER_SEND_INTENT_FAILED = -1004;
/*      */   
/*      */   public static final int IABHELPER_USER_CANCELLED = -1005;
/*      */   
/*      */   public static final int IABHELPER_UNKNOWN_PURCHASE_RESPONSE = -1006;
/*      */   
/*      */   public static final int IABHELPER_MISSING_TOKEN = -1007;
/*      */   
/*      */   public static final int IABHELPER_UNKNOWN_ERROR = -1008;
/*      */   
/*      */   public static final int IABHELPER_SUBSCRIPTIONS_NOT_AVAILABLE = -1009;
/*      */   
/*      */   public static final int IABHELPER_INVALID_CONSUMPTION = -1010;
/*      */   
/*      */   public static final int IABHELPER_SERVICE_IS_NULL = -1011;
/*      */   
/*      */   public static final String RESPONSE_CODE = "RESPONSE_CODE";
/*      */   public static final String RESPONSE_GET_SKU_DETAILS_LIST = "DETAILS_LIST";
/*      */   public static final String RESPONSE_BUY_INTENT = "BUY_INTENT";
/*      */   public static final String RESPONSE_INAPP_PURCHASE_DATA = "INAPP_PURCHASE_DATA";
/*      */   public static final String RESPONSE_INAPP_SIGNATURE = "INAPP_DATA_SIGNATURE";
/*      */   public static final String RESPONSE_INAPP_ITEM_LIST = "INAPP_PURCHASE_ITEM_LIST";
/*      */   public static final String RESPONSE_INAPP_PURCHASE_DATA_LIST = "INAPP_PURCHASE_DATA_LIST";
/*      */   public static final String RESPONSE_INAPP_SIGNATURE_LIST = "INAPP_DATA_SIGNATURE_LIST";
/*      */   public static final String INAPP_CONTINUATION_TOKEN = "INAPP_CONTINUATION_TOKEN";
/*      */   public static final String ITEM_TYPE_INAPP = "inapp";
/*      */   public static final String ITEM_TYPE_SUBS = "subs";
/*      */   public static final String GET_SKU_DETAILS_ITEM_LIST = "ITEM_ID_LIST";
/*      */   public static final String GET_SKU_DETAILS_ITEM_TYPE_LIST = "ITEM_TYPE_LIST";
/*      */   
/*      */   public IabHelper(Context paramContext, String paramString) {
/*  165 */     this.mContext = paramContext.getApplicationContext();
/*  166 */     this.mSignatureBase64 = paramString;
/*  167 */     logDebug("IAB helper created.");
/*      */   }
/*      */ 
/*      */ 
/*      */ 
/*      */   
/*      */   public void enableDebugLogging(boolean paramBoolean, String paramString) {
/*  174 */     checkNotDisposed();
/*  175 */     this.mDebugLog = paramBoolean;
/*  176 */     this.mDebugTag = paramString;
/*      */   }
/*      */   
/*      */   public void enableDebugLogging(boolean paramBoolean) {
/*  180 */     checkNotDisposed();
/*  181 */     this.mDebugLog = paramBoolean;
/*      */   }
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */   
/*      */   public static boolean is_billing_supported = false;
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */   
/*      */   OnIabPurchaseFinishedListener mPurchaseListener;
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */   
/*      */   public void startSetup(final OnIabSetupFinishedListener listener) {
/*  208 */     checkNotDisposed();
/*  209 */     if (this.mSetupDone) throw new IllegalStateException("IAB helper is already set up.");
/*      */ 
/*      */     
/*  212 */     logDebug("Starting in-app billing setup.");
/*  213 */     this.mServiceConn = new ServiceConnection()
/*      */       {
/*      */         public void onServiceDisconnected(ComponentName param1ComponentName) {
/*  216 */           IabHelper.this.logDebug("Billing service disconnected.");
/*  217 */           IabHelper.this.mService = null;
/*      */         }
/*      */ 
/*      */         
/*      */         public void onServiceConnected(ComponentName param1ComponentName, IBinder param1IBinder) {
/*  222 */           if (IabHelper.this.mDisposed)
/*  223 */             return;  IabHelper.this.logDebug("Billing service connected.");
/*  224 */           IabHelper.this.mService = IInAppBillingService.Stub.asInterface(param1IBinder);
/*  225 */           String str = IabHelper.this.mContext.getPackageName();
/*      */           try {
/*  227 */             IabHelper.this.logDebug("Checking for in-app billing 3 support.");
/*      */ 
/*      */             
/*  230 */             int i = IabHelper.this.mService.isBillingSupported(3, str, "inapp");
/*  231 */             if (i != 0) {
/*  232 */               IabHelper.is_billing_supported = false;
/*  233 */               if (listener != null) listener.onIabSetupFinished(new IabResult(i, "Error checking for billing v3 support."));
/*      */ 
/*      */ 
/*      */               
/*  237 */               IabHelper.this.mSubscriptionsSupported = false;
/*      */               return;
/*      */             } 
/*  240 */             IabHelper.this.logDebug("In-app billing version 3 supported for " + str);
/*      */ 
/*      */             
/*  243 */             i = IabHelper.this.mService.isBillingSupported(3, str, "subs");
/*  244 */             if (i == 0) {
/*  245 */               IabHelper.is_billing_supported = true;
/*  246 */               IabHelper.this.logDebug("Subscriptions AVAILABLE.");
/*  247 */               IabHelper.this.mSubscriptionsSupported = true;
/*      */             } else {
/*      */               
/*  250 */               IabHelper.this.logDebug("Subscriptions NOT AVAILABLE. Response: " + i);
/*      */             } 
/*      */             
/*  253 */             IabHelper.this.mSetupDone = true;
/*      */           }
/*  255 */           catch (RemoteException remoteException) {
/*  256 */             if (listener != null) {
/*  257 */               listener.onIabSetupFinished(new IabResult(-1001, "RemoteException while setting up in-app billing."));
/*      */             }
/*      */             
/*  260 */             remoteException.printStackTrace();
/*      */             
/*      */             return;
/*      */           } 
/*  264 */           if (listener != null) {
/*  265 */             listener.onIabSetupFinished(new IabResult(0, "Setup successful."));
/*      */           }
/*      */         }
/*      */       };
/*      */     
/*  270 */     Intent intent = new Intent("com.android.vending.billing.InAppBillingService.BIND");
/*  271 */     intent.setPackage("com.android.vending");
/*  272 */     if (!this.mContext.getPackageManager().queryIntentServices(intent, 0).isEmpty()) {
/*      */       
/*  274 */       this.mContext.bindService(intent, this.mServiceConn, 1);
/*      */ 
/*      */     
/*      */     }
/*  278 */     else if (listener != null) {
/*  279 */       listener.onIabSetupFinished(new IabResult(3, "Billing service unavailable on device."));
/*      */     } 
/*      */   }
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */   
/*      */   public void dispose() {
/*  294 */     logDebug("Disposing.");
/*  295 */     this.mSetupDone = false;
/*  296 */     if (this.mServiceConn != null) {
/*  297 */       logDebug("Unbinding from service.");
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */       
/*  305 */       if (this.mContext != null && this.mService != null) this.mContext.unbindService(this.mServiceConn); 
/*      */     } 
/*  307 */     this.mDisposed = true;
/*  308 */     this.mContext = null;
/*  309 */     this.mServiceConn = null;
/*  310 */     this.mService = null;
/*  311 */     this.mPurchaseListener = null;
/*      */   }
/*      */   
/*      */   private void checkNotDisposed() {
/*  315 */     if (this.mDisposed) throw new IllegalStateException("IabHelper was disposed of, so it cannot be used.");
/*      */   
/*      */   }
/*      */   
/*      */   public boolean subscriptionsSupported() {
/*  320 */     checkNotDisposed();
/*  321 */     return this.mSubscriptionsSupported;
/*      */   }
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */   
/*      */   public void launchPurchaseFlow(Activity paramActivity, String paramString, int paramInt, OnIabPurchaseFinishedListener paramOnIabPurchaseFinishedListener) {
/*  346 */     launchPurchaseFlow(paramActivity, paramString, paramInt, paramOnIabPurchaseFinishedListener, "");
/*      */   }
/*      */ 
/*      */   
/*      */   public void launchPurchaseFlow(Activity paramActivity, String paramString1, int paramInt, OnIabPurchaseFinishedListener paramOnIabPurchaseFinishedListener, String paramString2) {
/*  351 */     launchPurchaseFlow(paramActivity, paramString1, "inapp", paramInt, paramOnIabPurchaseFinishedListener, paramString2);
/*      */   }
/*      */ 
/*      */   
/*      */   public void launchSubscriptionPurchaseFlow(Activity paramActivity, String paramString, int paramInt, OnIabPurchaseFinishedListener paramOnIabPurchaseFinishedListener) {
/*  356 */     launchSubscriptionPurchaseFlow(paramActivity, paramString, paramInt, paramOnIabPurchaseFinishedListener, "");
/*      */   }
/*      */ 
/*      */   
/*      */   public void launchSubscriptionPurchaseFlow(Activity paramActivity, String paramString1, int paramInt, OnIabPurchaseFinishedListener paramOnIabPurchaseFinishedListener, String paramString2) {
/*  361 */     launchPurchaseFlow(paramActivity, paramString1, "subs", paramInt, paramOnIabPurchaseFinishedListener, paramString2);
/*      */   }
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */   
/*      */   public void launchPurchaseFlow(Activity paramActivity, String paramString1, String paramString2, int paramInt, OnIabPurchaseFinishedListener paramOnIabPurchaseFinishedListener, String paramString3) {
/*  384 */     checkNotDisposed();
/*  385 */     checkSetupDone("launchPurchaseFlow");
/*  386 */     flagStartAsync("launchPurchaseFlow");
/*      */ 
/*      */     
/*  389 */     if (paramString2.equals("subs") && !this.mSubscriptionsSupported) {
/*  390 */       IabResult iabResult = new IabResult(-1009, "Subscriptions are not available.");
/*      */       
/*  392 */       flagEndAsync();
/*  393 */       if (paramOnIabPurchaseFinishedListener != null) paramOnIabPurchaseFinishedListener.onIabPurchaseFinished(iabResult, null);
/*      */       
/*      */       return;
/*      */     } 
/*      */     try {
/*  398 */       logDebug("Constructing buy intent for " + paramString1 + ", item type: " + paramString2);
/*  399 */       Bundle bundle = this.mService.getBuyIntent(3, this.mContext.getPackageName(), paramString1, paramString2, paramString3);
/*  400 */       int i = getResponseCodeFromBundle(bundle);
/*  401 */       if (i != 0) {
/*  402 */         logError("Unable to buy item, Error response: " + getResponseDesc(i));
/*  403 */         flagEndAsync();
/*  404 */         IabResult iabResult = new IabResult(i, "Unable to buy item");
/*  405 */         if (paramOnIabPurchaseFinishedListener != null) paramOnIabPurchaseFinishedListener.onIabPurchaseFinished(iabResult, null);
/*      */         
/*      */         return;
/*      */       } 
/*  409 */       PendingIntent pendingIntent = (PendingIntent)bundle.getParcelable("BUY_INTENT");
/*  410 */       logDebug("Launching buy intent for " + paramString1 + ". Request code: " + paramInt);
/*  411 */       this.mRequestCode = paramInt;
/*  412 */       this.mPurchaseListener = paramOnIabPurchaseFinishedListener;
/*  413 */       this.mPurchasingItemType = paramString2;
/*  414 */       paramActivity.startIntentSenderForResult(pendingIntent.getIntentSender(), paramInt, new Intent(), 
/*      */           
/*  416 */           Integer.valueOf(0).intValue(), Integer.valueOf(0).intValue(), 
/*  417 */           Integer.valueOf(0).intValue());
/*      */     }
/*  419 */     catch (android.content.IntentSender.SendIntentException sendIntentException) {
/*  420 */       logError("SendIntentException while launching purchase flow for sku " + paramString1);
/*  421 */       sendIntentException.printStackTrace();
/*  422 */       flagEndAsync();
/*      */       
/*  424 */       IabResult iabResult = new IabResult(-1004, "Failed to send intent.");
/*  425 */       if (paramOnIabPurchaseFinishedListener != null) paramOnIabPurchaseFinishedListener.onIabPurchaseFinished(iabResult, null);
/*      */     
/*  427 */     } catch (RemoteException remoteException) {
/*  428 */       logError("RemoteException while launching purchase flow for sku " + paramString1);
/*  429 */       remoteException.printStackTrace();
/*  430 */       flagEndAsync();
/*      */       
/*  432 */       IabResult iabResult = new IabResult(-1001, "Remote exception while starting purchase flow");
/*  433 */       if (paramOnIabPurchaseFinishedListener != null) paramOnIabPurchaseFinishedListener.onIabPurchaseFinished(iabResult, null);
/*      */     
/*      */     } 
/*      */   }
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */   
/*      */   public boolean handleActivityResult(int paramInt1, int paramInt2, Intent paramIntent) {
/*  452 */     if (paramInt1 != this.mRequestCode) return false;
/*      */     
/*  454 */     checkNotDisposed();
/*  455 */     checkSetupDone("handleActivityResult");
/*      */ 
/*      */     
/*  458 */     flagEndAsync();
/*      */     
/*  460 */     if (paramIntent == null) {
/*  461 */       logError("Null data in IAB activity result.");
/*  462 */       IabResult iabResult = new IabResult(-1002, "Null data in IAB result");
/*  463 */       if (this.mPurchaseListener != null) this.mPurchaseListener.onIabPurchaseFinished(iabResult, null); 
/*  464 */       return true;
/*      */     } 
/*      */     
/*  467 */     int i = getResponseCodeFromIntent(paramIntent);
/*  468 */     String str1 = paramIntent.getStringExtra("INAPP_PURCHASE_DATA");
/*  469 */     String str2 = paramIntent.getStringExtra("INAPP_DATA_SIGNATURE");
/*      */     
/*  471 */     if (paramInt2 == -1 && i == 0) {
/*  472 */       logDebug("Successful resultcode from purchase activity.");
/*  473 */       logDebug("Purchase data: " + str1);
/*  474 */       logDebug("Data signature: " + str2);
/*  475 */       logDebug("Extras: " + paramIntent.getExtras());
/*  476 */       logDebug("Expected item type: " + this.mPurchasingItemType);
/*      */       
/*  478 */       if (str1 == null || str2 == null) {
/*  479 */         logError("BUG: either purchaseData or dataSignature is null.");
/*  480 */         logDebug("Extras: " + paramIntent.getExtras().toString());
/*  481 */         IabResult iabResult = new IabResult(-1008, "IAB returned null purchaseData or dataSignature");
/*  482 */         if (this.mPurchaseListener != null) this.mPurchaseListener.onIabPurchaseFinished(iabResult, null); 
/*  483 */         return true;
/*      */       } 
/*      */       
/*  486 */       Purchase purchase = null;
/*      */       try {
/*  488 */         purchase = new Purchase(this.mPurchasingItemType, str1, str2);
/*  489 */         String str = purchase.getSku();
/*      */ 
/*      */         
/*  492 */         if (!Security.verifyPurchase(this.mSignatureBase64, str1, str2)) {
/*  493 */           logError("Purchase signature verification FAILED for sku " + str);
/*  494 */           IabResult iabResult = new IabResult(-1003, "Signature verification failed for sku " + str);
/*  495 */           if (this.mPurchaseListener != null) this.mPurchaseListener.onIabPurchaseFinished(iabResult, purchase); 
/*  496 */           return true;
/*      */         } 
/*  498 */         logDebug("Purchase signature successfully verified.");
/*      */       }
/*  500 */       catch (JSONException jSONException) {
/*  501 */         logError("Failed to parse purchase data.");
/*  502 */         jSONException.printStackTrace();
/*  503 */         IabResult iabResult = new IabResult(-1002, "Failed to parse purchase data.");
/*  504 */         if (this.mPurchaseListener != null) this.mPurchaseListener.onIabPurchaseFinished(iabResult, null); 
/*  505 */         return true;
/*      */       } 
/*      */       
/*  508 */       if (this.mPurchaseListener != null) {
/*  509 */         this.mPurchaseListener.onIabPurchaseFinished(new IabResult(0, "Success"), purchase);
/*      */       }
/*      */     }
/*  512 */     else if (paramInt2 == -1) {
/*      */       
/*  514 */       logDebug("Result code was OK but in-app billing response was not OK: " + getResponseDesc(i));
/*  515 */       if (this.mPurchaseListener != null) {
/*  516 */         IabResult iabResult = new IabResult(i, "Problem purchashing item.");
/*  517 */         this.mPurchaseListener.onIabPurchaseFinished(iabResult, null);
/*      */       }
/*      */     
/*  520 */     } else if (paramInt2 == 0) {
/*  521 */       logDebug("Purchase canceled - Response: " + getResponseDesc(i));
/*  522 */       IabResult iabResult = new IabResult(-1005, "User canceled.");
/*  523 */       if (this.mPurchaseListener != null) this.mPurchaseListener.onIabPurchaseFinished(iabResult, null);
/*      */     
/*      */     } else {
/*  526 */       logError("Purchase failed. Result code: " + Integer.toString(paramInt2) + ". Response: " + 
/*  527 */           getResponseDesc(i));
/*  528 */       IabResult iabResult = new IabResult(-1006, "Unknown purchase response.");
/*  529 */       if (this.mPurchaseListener != null) this.mPurchaseListener.onIabPurchaseFinished(iabResult, null); 
/*      */     } 
/*  531 */     return true;
/*      */   }
/*      */   
/*      */   public Inventory queryInventory(boolean paramBoolean, List<String> paramList) throws IabException {
/*  535 */     return queryInventory(paramBoolean, paramList, null);
/*      */   }
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */   
/*      */   public Inventory queryInventory(boolean paramBoolean, List<String> paramList1, List<String> paramList2) throws IabException {
/*  553 */     checkNotDisposed();
/*  554 */     checkSetupDone("queryInventory");
/*      */     try {
/*  556 */       Inventory inventory = new Inventory();
/*  557 */       int i = queryPurchases(inventory, "inapp");
/*  558 */       if (i != 0) {
/*  559 */         throw new IabException(i, "Error refreshing inventory (querying owned items).");
/*      */       }
/*      */       
/*  562 */       if (paramBoolean) {
/*  563 */         i = querySkuDetails("inapp", inventory, paramList1);
/*  564 */         if (i != 0) {
/*  565 */           throw new IabException(i, "Error refreshing inventory (querying prices of items).");
/*      */         }
/*      */       } 
/*      */ 
/*      */       
/*  570 */       if (this.mSubscriptionsSupported) {
/*  571 */         i = queryPurchases(inventory, "subs");
/*  572 */         if (i != 0) {
/*  573 */           throw new IabException(i, "Error refreshing inventory (querying owned subscriptions).");
/*      */         }
/*      */         
/*  576 */         if (paramBoolean) {
/*  577 */           i = querySkuDetails("subs", inventory, paramList1);
/*  578 */           if (i != 0) {
/*  579 */             throw new IabException(i, "Error refreshing inventory (querying prices of subscriptions).");
/*      */           }
/*      */         } 
/*      */       } 
/*      */       
/*  584 */       return inventory;
/*      */     }
/*  586 */     catch (RemoteException remoteException) {
/*  587 */       throw new IabException(-1001, "Remote exception while refreshing inventory.", remoteException);
/*      */     }
/*  589 */     catch (JSONException jSONException) {
/*  590 */       throw new IabException(-1002, "Error parsing JSON response while refreshing inventory.", jSONException);
/*      */     } 
/*      */   }
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */   
/*      */   public void queryInventoryAsync(final boolean querySkuDetails, final List<String> moreSkus, final QueryInventoryFinishedListener listener) {
/*  621 */     final Handler handler = new Handler();
/*  622 */     checkNotDisposed();
/*  623 */     checkSetupDone("queryInventory");
/*  624 */     flagStartAsync("refresh inventory");
/*  625 */     (new Thread(new Runnable() {
/*      */           public void run() {
/*  627 */             IabResult iabResult1 = new IabResult(0, "Inventory refresh successful.");
/*  628 */             Inventory inventory1 = null;
/*      */             try {
/*  630 */               inventory1 = IabHelper.this.queryInventory(querySkuDetails, moreSkus);
/*      */             }
/*  632 */             catch (IabException iabException) {
/*  633 */               iabResult1 = iabException.getResult();
/*      */             } 
/*      */             
/*  636 */             IabHelper.this.flagEndAsync();
/*      */             
/*  638 */             final IabResult result_f = iabResult1;
/*  639 */             final Inventory inv_f = inventory1;
/*  640 */             if (!IabHelper.this.mDisposed && listener != null) {
/*  641 */               handler.post(new Runnable() {
/*      */                     public void run() {
/*  643 */                       listener.onQueryInventoryFinished(result_f, inv_f);
/*      */                     }
/*      */                   });
/*      */             }
/*      */           }
/*  648 */         })).start();
/*      */   }
/*      */   
/*      */   public void queryInventoryAsync(QueryInventoryFinishedListener paramQueryInventoryFinishedListener) {
/*  652 */     queryInventoryAsync(true, null, paramQueryInventoryFinishedListener);
/*      */   }
/*      */   
/*      */   public void queryInventoryAsync(boolean paramBoolean, QueryInventoryFinishedListener paramQueryInventoryFinishedListener) {
/*  656 */     queryInventoryAsync(paramBoolean, null, paramQueryInventoryFinishedListener);
/*      */   }
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */   
/*      */   void consume(Purchase paramPurchase) throws IabException {
/*  670 */     if (paramPurchase == null)
/*      */       return; 
/*  672 */     checkNotDisposed();
/*  673 */     checkSetupDone("consume");
/*      */     
/*  675 */     if (!paramPurchase.mItemType.equals("inapp")) {
/*  676 */       throw new IabException(-1010, "Items of type '" + paramPurchase.mItemType + "' can't be consumed.");
/*      */     }
/*      */ 
/*      */     
/*      */     try {
/*  681 */       String str1 = paramPurchase.getToken();
/*  682 */       String str2 = paramPurchase.getSku();
/*  683 */       if (str1 == null || str1.equals("")) {
/*  684 */         logError("Can't consume " + str2 + ". No token.");
/*  685 */         throw new IabException(-1007, "PurchaseInfo is missing token for sku: " + str2 + " " + paramPurchase);
/*      */       } 
/*      */ 
/*      */       
/*  689 */       logDebug("Consuming sku: " + str2 + ", token: " + str1);
/*  690 */       int i = this.mService.consumePurchase(3, this.mContext.getPackageName(), str1);
/*  691 */       if (i == 0) {
/*  692 */         logDebug("Successfully consumed sku: " + str2);
/*      */       } else {
/*      */         
/*  695 */         logDebug("Error consuming consuming sku " + str2 + ". " + getResponseDesc(i));
/*  696 */         throw new IabException(i, "Error consuming sku " + str2);
/*      */       }
/*      */     
/*  699 */     } catch (RemoteException remoteException) {
/*  700 */       throw new IabException(-1001, "Remote exception while consuming. PurchaseInfo: " + paramPurchase, remoteException);
/*      */     } 
/*      */   }
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */   
/*      */   public void consumeAsync(Purchase paramPurchase, OnConsumeFinishedListener paramOnConsumeFinishedListener) {
/*  740 */     checkNotDisposed();
/*  741 */     checkSetupDone("consume");
/*  742 */     ArrayList<Purchase> arrayList = new ArrayList();
/*  743 */     arrayList.add(paramPurchase);
/*  744 */     consumeAsyncInternal(arrayList, paramOnConsumeFinishedListener, null);
/*      */   }
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */   
/*      */   public void consumeAsync(List<Purchase> paramList, OnConsumeMultiFinishedListener paramOnConsumeMultiFinishedListener) {
/*  753 */     checkNotDisposed();
/*  754 */     checkSetupDone("consume");
/*  755 */     consumeAsyncInternal(paramList, null, paramOnConsumeMultiFinishedListener);
/*      */   }
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */   
/*      */   public static String getResponseDesc(int paramInt) {
/*  769 */     String[] arrayOfString1 = "0:OK/1:User Canceled/2:Unknown/3:Billing Unavailable/4:Item unavailable/5:Developer Error/6:Error/7:Item Already Owned/8:Item not owned".split("/");
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */ 
/*      */     
/*  779 */     String[] arrayOfString2 = "0:OK/-1001:Remote exception during initialization/-1002:Bad response received/-1003:Purchase signature verification failed/-1004:Send intent failed/-1005:User cancelled/-1006:Unknown purchase response/-1007:Missing token/-1008:Unknown error/-1009:Subscriptions not available/-1010:Invalid consumption attempt".split("/");
/*      */     
/*  781 */     if (paramInt <= -1000) {
/*  782 */       int i = -1000 - paramInt;
/*  783 */       if (i >= 0 && i < arrayOfString2.length) return arrayOfString2[i]; 
/*  784 */       return String.valueOf(paramInt) + ":Unknown IAB Helper Error";
/*      */     } 
/*  786 */     if (paramInt < 0 || paramInt >= arrayOfString1.length) {
/*  787 */       return String.valueOf(paramInt) + ":Unknown";
/*      */     }
/*  789 */     return arrayOfString1[paramInt];
/*      */   }
/*      */ 
/*      */   
/*      */   void checkSetupDone(String paramString) {
/*  794 */     if (!this.mSetupDone) {
/*  795 */       logError("Illegal state for operation (" + paramString + "): IAB helper is not set up.");
/*  796 */       throw new IllegalStateException("IAB helper is not set up. Can't perform operation: " + paramString);
/*      */     } 
/*      */   }
/*      */ 
/*      */   
/*      */   int getResponseCodeFromBundle(Bundle paramBundle) {
/*  802 */     Object object = paramBundle.get("RESPONSE_CODE");
/*  803 */     if (object == null) {
/*  804 */       logDebug("Bundle with null response code, assuming OK (known issue)");
/*  805 */       return 0;
/*      */     } 
/*  807 */     if (object instanceof Integer) return ((Integer)object).intValue(); 
/*  808 */     if (object instanceof Long) return (int)((Long)object).longValue();
/*      */     
/*  810 */     logError("Unexpected type for bundle response code.");
/*  811 */     logError(object.getClass().getName());
/*  812 */     throw new RuntimeException("Unexpected type for bundle response code: " + object.getClass().getName());
/*      */   }
/*      */ 
/*      */ 
/*      */   
/*      */   int getResponseCodeFromIntent(Intent paramIntent) {
/*  818 */     Object object = paramIntent.getExtras().get("RESPONSE_CODE");
/*  819 */     if (object == null) {
/*  820 */       logError("Intent with no response code, assuming OK (known issue)");
/*  821 */       return 0;
/*      */     } 
/*  823 */     if (object instanceof Integer) return ((Integer)object).intValue(); 
/*  824 */     if (object instanceof Long) return (int)((Long)object).longValue();
/*      */     
/*  826 */     logError("Unexpected type for intent response code.");
/*  827 */     logError(object.getClass().getName());
/*  828 */     throw new RuntimeException("Unexpected type for intent response code: " + object.getClass().getName());
/*      */   }
/*      */ 
/*      */   
/*      */   void flagStartAsync(String paramString) {
/*  833 */     if (this.mAsyncInProgress) throw new IllegalStateException("Can't start async operation (" + paramString + ") because another async operation(" + this.mAsyncOperation + ") is in progress.");
/*      */     
/*  835 */     this.mAsyncOperation = paramString;
/*  836 */     this.mAsyncInProgress = true;
/*  837 */     logDebug("Starting async operation: " + paramString);
/*      */   }
/*      */   
/*      */   void flagEndAsync() {
/*  841 */     logDebug("Ending async operation: " + this.mAsyncOperation);
/*  842 */     this.mAsyncOperation = "";
/*  843 */     this.mAsyncInProgress = false;
/*      */   }
/*      */ 
/*      */ 
/*      */   
/*      */   int queryPurchases(Inventory paramInventory, String paramString) throws JSONException, RemoteException {
/*  849 */     logDebug("Querying owned items, item type: " + paramString);
/*  850 */     logDebug("Package name: " + this.mContext.getPackageName());
/*  851 */     boolean bool = false;
/*  852 */     String str = null;
/*      */     
/*  854 */     if (this.mService == null) {
/*  855 */       return serviceIsDisconnected("queryPurchases");
/*      */     }
/*      */     do {
/*  858 */       logDebug("Calling getPurchases with continuation token: " + str);
/*  859 */       Bundle bundle = this.mService.getPurchases(3, this.mContext.getPackageName(), paramString, str);
/*      */ 
/*      */       
/*  862 */       int i = getResponseCodeFromBundle(bundle);
/*  863 */       logDebug("Owned items response: " + String.valueOf(i));
/*  864 */       if (i != 0) {
/*  865 */         logDebug("getPurchases() failed: " + getResponseDesc(i));
/*  866 */         return i;
/*      */       } 
/*  868 */       if (!bundle.containsKey("INAPP_PURCHASE_ITEM_LIST") || 
/*  869 */         !bundle.containsKey("INAPP_PURCHASE_DATA_LIST") || 
/*  870 */         !bundle.containsKey("INAPP_DATA_SIGNATURE_LIST")) {
/*  871 */         logError("Bundle returned from getPurchases() doesn't contain required fields.");
/*  872 */         return -1002;
/*      */       } 
/*      */       
/*  875 */       ArrayList<String> arrayList1 = bundle.getStringArrayList("INAPP_PURCHASE_ITEM_LIST");
/*      */       
/*  877 */       ArrayList<String> arrayList2 = bundle.getStringArrayList("INAPP_PURCHASE_DATA_LIST");
/*      */       
/*  879 */       ArrayList<String> arrayList3 = bundle.getStringArrayList("INAPP_DATA_SIGNATURE_LIST");
/*      */ 
/*      */       
/*  882 */       for (byte b = 0; b < arrayList2.size(); b++) {
/*  883 */         String str1 = arrayList2.get(b);
/*  884 */         String str2 = arrayList3.get(b);
/*  885 */         String str3 = arrayList1.get(b);
/*  886 */         if (Security.verifyPurchase(this.mSignatureBase64, str1, str2)) {
/*  887 */           logDebug("Sku is owned: " + str3);
/*  888 */           Purchase purchase = new Purchase(paramString, str1, str2);
/*      */           
/*  890 */           if (TextUtils.isEmpty(purchase.getToken())) {
/*  891 */             logWarn("BUG: empty/null token!");
/*  892 */             logDebug("Purchase data: " + str1);
/*      */           } 
/*      */ 
/*      */           
/*  896 */           paramInventory.addPurchase(purchase);
/*      */         } else {
/*      */           
/*  899 */           logWarn("Purchase signature verification **FAILED**. Not adding item.");
/*  900 */           logDebug("   Purchase data: " + str1);
/*  901 */           logDebug("   Signature: " + str2);
/*  902 */           bool = true;
/*      */         } 
/*      */       } 
/*      */       
/*  906 */       str = bundle.getString("INAPP_CONTINUATION_TOKEN");
/*  907 */       logDebug("Continuation token: " + str);
/*  908 */     } while (!TextUtils.isEmpty(str));
/*      */     
/*  910 */     return bool ? -1003 : 0;
/*      */   }
/*      */ 
/*      */   
/*      */   int querySkuDetails(String paramString, Inventory paramInventory, List<String> paramList) throws RemoteException, JSONException {
/*  915 */     logDebug("Querying SKU details.");
/*  916 */     if (this.mService == null)
/*  917 */       return serviceIsDisconnected("querySkuDetails"); 
/*  918 */     ArrayList<String> arrayList = new ArrayList();
/*  919 */     arrayList.addAll(paramInventory.getAllOwnedSkus(paramString));
/*  920 */     if (paramList != null) {
/*  921 */       for (String str : paramList) {
/*  922 */         if (!arrayList.contains(str)) {
/*  923 */           arrayList.add(str);
/*      */         }
/*      */       } 
/*      */     }
/*      */ 
/*      */     
/*  929 */     if (arrayList.size() == 0) {
/*  930 */       logDebug("queryPrices: nothing to do because there are no SKUs.");
/*  931 */       return 0;
/*      */     } 
/*      */ 
/*      */     
/*  935 */     ArrayList<ArrayList<String>> arrayList1 = new ArrayList();
/*      */     
/*  937 */     int i = arrayList.size() / 20;
/*  938 */     int j = arrayList.size() % 20;
/*  939 */     for (byte b = 0; b < i; b++) {
/*  940 */       ArrayList<String> arrayList2 = new ArrayList();
/*  941 */       for (String str : arrayList.subList(b * 20, b * 20 + 20)) {
/*  942 */         arrayList2.add(str);
/*      */       }
/*  944 */       arrayList1.add(arrayList2);
/*      */     } 
/*  946 */     if (j != 0) {
/*  947 */       ArrayList<String> arrayList2 = new ArrayList();
/*  948 */       for (String str : arrayList.subList(i * 20, i * 20 + j)) {
/*  949 */         arrayList2.add(str);
/*      */       }
/*  951 */       arrayList1.add(arrayList2);
/*      */       
/*  953 */       for (ArrayList<String> arrayList3 : arrayList1) {
/*  954 */         Bundle bundle1 = new Bundle();
/*  955 */         bundle1.putStringArrayList("ITEM_ID_LIST", arrayList3);
/*  956 */         Bundle bundle2 = this.mService.getSkuDetails(3, this.mContext.getPackageName(), paramString, bundle1);
/*      */ 
/*      */         
/*  959 */         if (!bundle2.containsKey("DETAILS_LIST")) {
/*  960 */           int k = getResponseCodeFromBundle(bundle2);
/*  961 */           if (k != 0) {
/*  962 */             logDebug("getSkuDetails() failed: " + getResponseDesc(k));
/*  963 */             return k;
/*      */           } 
/*      */           
/*  966 */           logError("getSkuDetails() returned a bundle with neither an error nor a detail list.");
/*  967 */           return -1002;
/*      */         } 
/*      */ 
/*      */         
/*  971 */         ArrayList arrayList4 = bundle2.getStringArrayList("DETAILS_LIST");
/*      */ 
/*      */         
/*  974 */         for (String str : arrayList4) {
/*  975 */           SkuDetails skuDetails = new SkuDetails(paramString, str);
/*  976 */           logDebug("Got sku details: " + skuDetails);
/*  977 */           paramInventory.addSkuDetails(skuDetails);
/*      */         } 
/*      */       } 
/*      */     } 
/*      */ 
/*      */     
/*  983 */     return 0;
/*      */   }
/*      */ 
/*      */ 
/*      */   
/*      */   void consumeAsyncInternal(final List<Purchase> purchases, final OnConsumeFinishedListener singleListener, final OnConsumeMultiFinishedListener multiListener) {
/*  989 */     if (purchases == null)
/*      */       return; 
/*  991 */     final Handler handler = new Handler();
/*  992 */     flagStartAsync("consume");
/*  993 */     (new Thread(new Runnable() {
/*      */           public void run() {
/*  995 */             final ArrayList<IabResult> results = new ArrayList();
/*  996 */             for (Purchase purchase : purchases) {
/*      */               try {
/*  998 */                 IabHelper.this.consume(purchase);
/*  999 */                 arrayList.add(new IabResult(0, "Successful consume of sku " + purchase.getSku()));
/*      */               }
/* 1001 */               catch (IabException iabException) {
/* 1002 */                 arrayList.add(iabException.getResult());
/*      */               } 
/*      */             } 
/*      */             
/* 1006 */             IabHelper.this.flagEndAsync();
/* 1007 */             if (!IabHelper.this.mDisposed && singleListener != null) {
/* 1008 */               handler.post(new Runnable() {
/*      */                     public void run() {
/* 1010 */                       singleListener.onConsumeFinished(purchases.get(0), results.get(0));
/*      */                     }
/*      */                   });
/*      */             }
/* 1014 */             if (!IabHelper.this.mDisposed && multiListener != null) {
/* 1015 */               handler.post(new Runnable() {
/*      */                     public void run() {
/* 1017 */                       multiListener.onConsumeMultiFinished(purchases, results);
/*      */                     }
/*      */                   });
/*      */             }
/*      */           }
/* 1022 */         })).start();
/*      */   }
/*      */   
/*      */   void logDebug(String paramString) {
/* 1026 */     if (this.mDebugLog) Log.d(this.mDebugTag, paramString); 
/*      */   }
/*      */   
/*      */   void logError(String paramString) {
/* 1030 */     Log.e(this.mDebugTag, "In-app billing error: " + paramString);
/*      */   }
/*      */   
/*      */   void logWarn(String paramString) {
/* 1034 */     Log.w(this.mDebugTag, "In-app billing warning: " + paramString);
/*      */   }
/*      */   
/*      */   private int serviceIsDisconnected(String paramString) {
/* 1038 */     logError("IabHelper.mService is null. Service not connected: " + paramString);
/* 1039 */     return -1011;
/*      */   }
/*      */   
/*      */   public static interface OnIabSetupFinishedListener {
/*      */     void onIabSetupFinished(IabResult param1IabResult);
/*      */   }
/*      */   
/*      */   public static interface OnIabPurchaseFinishedListener {
/*      */     void onIabPurchaseFinished(IabResult param1IabResult, Purchase param1Purchase);
/*      */   }
/*      */   
/*      */   public static interface QueryInventoryFinishedListener {
/*      */     void onQueryInventoryFinished(IabResult param1IabResult, Inventory param1Inventory);
/*      */   }
/*      */   
/*      */   public static interface OnConsumeFinishedListener {
/*      */     void onConsumeFinished(Purchase param1Purchase, IabResult param1IabResult);
/*      */   }
/*      */   
/*      */   public static interface OnConsumeMultiFinishedListener {
/*      */     void onConsumeMultiFinished(List<Purchase> param1List, List<IabResult> param1List1);
/*      */   }
/*      */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/billing/google/IabHelper.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */