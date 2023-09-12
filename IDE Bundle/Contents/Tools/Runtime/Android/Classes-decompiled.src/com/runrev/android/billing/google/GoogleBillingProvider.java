/*     */ package com.runrev.android.billing.google;
/*     */ 
/*     */ import android.app.Activity;
/*     */ import android.app.AlertDialog;
/*     */ import android.content.Context;
/*     */ import android.content.Intent;
/*     */ import com.runrev.android.Engine;
/*     */ import com.runrev.android.billing.BillingProvider;
/*     */ import com.runrev.android.billing.PurchaseObserver;
/*     */ import java.util.ArrayList;
/*     */ import java.util.HashMap;
/*     */ import java.util.HashSet;
/*     */ import java.util.List;
/*     */ import java.util.Map;
/*     */ import java.util.Set;
/*     */ 
/*     */ public class GoogleBillingProvider
/*     */   implements BillingProvider {
/*     */   public static final String TAG = "GoogleBillingProvider";
/*     */   private Activity mActivity;
/*  21 */   private Boolean started = Boolean.valueOf(false);
/*     */   private PurchaseObserver mPurchaseObserver;
/*  23 */   private Map<String, String> types = new HashMap<>();
/*  24 */   private Map<String, Map<String, String>> itemProps = new HashMap<>();
/*     */   
/*  26 */   private List<SkuDetails> knownItems = new ArrayList<>();
/*  27 */   private Set<String> ownedItems = new HashSet<>();
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*  33 */   private String pendingPurchaseSku = "";
/*     */ 
/*     */   
/*     */   static final int RC_REQUEST = 10001;
/*     */ 
/*     */   
/*  39 */   IabHelper mHelper = null;
/*     */ 
/*     */   
/*     */   public void initBilling() {
/*  43 */     String str = Engine.doGetCustomPropertyValue("cREVStandaloneSettings", "android,storeKey");
/*     */     
/*  45 */     if (str != null && str.length() > 0) {
/*  46 */       Security.setPublicKey(str);
/*     */     }
/*     */     
/*  49 */     BillingProvider.Log.d("GoogleBillingProvider", "Creating IAB helper.");
/*  50 */     this.mHelper = new IabHelper((Context)getActivity(), str);
/*     */ 
/*     */     
/*  53 */     this.mHelper.enableDebugLogging(false);
/*     */ 
/*     */ 
/*     */     
/*  57 */     BillingProvider.Log.d("GoogleBillingProvider", "Starting setup.");
/*  58 */     this.mHelper.startSetup(new IabHelper.OnIabSetupFinishedListener()
/*     */         {
/*     */           public void onIabSetupFinished(IabResult param1IabResult)
/*     */           {
/*  62 */             BillingProvider.Log.d("GoogleBillingProvider", "Setup finished.");
/*     */             
/*  64 */             if (!param1IabResult.isSuccess()) {
/*     */ 
/*     */               
/*  67 */               GoogleBillingProvider.this.complain("Problem setting up in-app billing: " + param1IabResult);
/*     */               
/*     */               return;
/*     */             } 
/*     */             
/*  72 */             if (GoogleBillingProvider.this.mHelper == null) {
/*     */               return;
/*     */             }
/*  75 */             BillingProvider.Log.d("GoogleBillingProvider", "Setup successful.");
/*     */           }
/*     */         });
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public void onDestroy() {
/*  84 */     if (this.mHelper != null)
/*  85 */       this.mHelper.dispose(); 
/*  86 */     this.mHelper = null;
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean canMakePurchase() {
/*  91 */     if (this.mHelper == null) {
/*  92 */       return false;
/*     */     }
/*     */     
/*  95 */     return IabHelper.is_billing_supported;
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean enableUpdates() {
/* 100 */     if (this.mHelper == null) {
/* 101 */       return false;
/*     */     }
/* 103 */     return true;
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean disableUpdates() {
/* 108 */     if (this.mHelper == null) {
/* 109 */       return false;
/*     */     }
/* 111 */     return true;
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean restorePurchases() {
/* 116 */     if (this.mHelper == null)
/*     */     {
/* 118 */       return false;
/*     */     }
/*     */     
/* 121 */     BillingProvider.Log.d("GoogleBillingProvider", "Querying inventory.");
/* 122 */     this.mHelper.queryInventoryAsync(this.mGotInventoryListener);
/*     */     
/* 124 */     return true;
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean sendRequest(int paramInt, String paramString1, String paramString2) {
/* 129 */     if (this.mHelper == null) {
/* 130 */       return false;
/*     */     }
/* 132 */     String str = productGetType(paramString1);
/* 133 */     if (str == null) {
/*     */       
/* 135 */       BillingProvider.Log.i("GoogleBillingProvider", "Item type is null (not specified). Exiting..");
/* 136 */       return false;
/*     */     } 
/*     */     
/* 139 */     this.pendingPurchaseSku = paramString1;
/*     */     
/* 141 */     BillingProvider.Log.i("GoogleBillingProvider", "purchaseSendRequest(" + paramInt + ", " + paramString1 + ", " + str + ")");
/*     */     
/* 143 */     if (str.equals("subs")) {
/*     */       
/* 145 */       this.mHelper.launchSubscriptionPurchaseFlow(getActivity(), paramString1, 10001, this.mPurchaseFinishedListener, paramString2);
/* 146 */       return true;
/*     */     } 
/* 148 */     if (str.equals("inapp")) {
/*     */       
/* 150 */       this.mHelper.launchPurchaseFlow(getActivity(), paramString1, 10001, this.mPurchaseFinishedListener, paramString2);
/* 151 */       return true;
/*     */     } 
/*     */ 
/*     */     
/* 155 */     BillingProvider.Log.i("GoogleBillingProvider", "Item type is not recognized. Exiting..");
/* 156 */     return false;
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean makePurchase(String paramString1, String paramString2, String paramString3) {
/* 163 */     if (this.mHelper == null) {
/* 164 */       return false;
/*     */     }
/* 166 */     String str = productGetType(paramString1);
/* 167 */     if (str == null) {
/*     */       
/* 169 */       BillingProvider.Log.i("GoogleBillingProvider", "Item type is null (not specified). Exiting..");
/* 170 */       return false;
/*     */     } 
/*     */     
/* 173 */     this.pendingPurchaseSku = paramString1;
/* 174 */     setPurchaseProperty(paramString1, "developerPayload", paramString3);
/*     */     
/* 176 */     BillingProvider.Log.i("GoogleBillingProvider", "purchaseSendRequest(" + paramString1 + ", " + str + ")");
/*     */     
/* 178 */     if (str.equals("subs")) {
/*     */       
/* 180 */       this.mHelper.launchSubscriptionPurchaseFlow(getActivity(), paramString1, 10001, this.mPurchaseFinishedListener, paramString3);
/* 181 */       return true;
/*     */     } 
/* 183 */     if (str.equals("inapp")) {
/*     */       
/* 185 */       this.mHelper.launchPurchaseFlow(getActivity(), paramString1, 10001, this.mPurchaseFinishedListener, paramString3);
/* 186 */       return true;
/*     */     } 
/*     */ 
/*     */     
/* 190 */     BillingProvider.Log.i("GoogleBillingProvider", "Item type is not recognized. Exiting..");
/* 191 */     return false;
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean productSetType(String paramString1, String paramString2) {
/* 198 */     BillingProvider.Log.d("GoogleBillingProvider", "Setting type for productId" + paramString1 + ", type is : " + paramString2);
/* 199 */     this.types.put(paramString1, paramString2);
/* 200 */     BillingProvider.Log.d("GoogleBillingProvider", "Querying HashMap, type is " + (String)this.types.get(paramString1));
/* 201 */     return true;
/*     */   }
/*     */ 
/*     */   
/*     */   private String productGetType(String paramString) {
/* 206 */     return this.types.get(paramString);
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean consumePurchase(final String productId) {
/* 211 */     this.mHelper.queryInventoryAsync(new IabHelper.QueryInventoryFinishedListener()
/*     */         {
/*     */ 
/*     */           
/*     */           public void onQueryInventoryFinished(IabResult param1IabResult, Inventory param1Inventory)
/*     */           {
/* 217 */             if (param1IabResult.isFailure()) {
/*     */               return;
/*     */             }
/*     */ 
/*     */ 
/*     */             
/* 223 */             Purchase purchase = param1Inventory.getPurchase(productId);
/*     */             
/* 225 */             if (purchase == null) {
/*     */               
/* 227 */               BillingProvider.Log.d("GoogleBillingProvider", "You cannot consume item : " + productId + ", since you don't own it!");
/*     */               return;
/*     */             } 
/* 230 */             GoogleBillingProvider.this.mHelper.consumeAsync(purchase, GoogleBillingProvider.this.mConsumeFinishedListener);
/*     */           }
/*     */         });
/*     */     
/* 234 */     return true;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean requestProductDetails(final String productId) {
/* 240 */     byte b = 25;
/* 241 */     ArrayList<String> arrayList = new ArrayList(b);
/* 242 */     arrayList.add(productId);
/* 243 */     this.mHelper.queryInventoryAsync(true, arrayList, new IabHelper.QueryInventoryFinishedListener()
/*     */         {
/*     */ 
/*     */           
/*     */           public void onQueryInventoryFinished(IabResult param1IabResult, Inventory param1Inventory)
/*     */           {
/* 249 */             if (param1IabResult.isFailure()) {
/*     */               return;
/*     */             }
/*     */ 
/*     */ 
/*     */             
/* 255 */             SkuDetails skuDetails = param1Inventory.getSkuDetails(productId);
/*     */             
/* 257 */             if (skuDetails == null) {
/*     */               
/* 259 */               BillingProvider.Log.d("GoogleBillingProvider", "No product found with the specified ID : " + productId + " !");
/* 260 */               GoogleBillingProvider.this.mPurchaseObserver.onProductDetailsError(productId, "No product found with the specified ID");
/*     */               
/*     */               return;
/*     */             } 
/* 264 */             GoogleBillingProvider.this.knownItems.add(skuDetails);
/* 265 */             GoogleBillingProvider.this.loadKnownItemToLocalInventory(skuDetails);
/* 266 */             BillingProvider.Log.d("GoogleBillingProvider", "Details for requested product : " + skuDetails.toString());
/*     */             
/* 268 */             GoogleBillingProvider.this.mPurchaseObserver.onProductDetailsReceived(productId);
/*     */           }
/*     */         });
/*     */ 
/*     */ 
/*     */     
/* 274 */     return true;
/*     */   }
/*     */ 
/*     */   
/*     */   public String receiveProductDetails(String paramString) {
/* 279 */     for (SkuDetails skuDetails : this.knownItems) {
/*     */       
/* 281 */       if (paramString.equals(skuDetails.getSku()))
/*     */       {
/* 283 */         return skuDetails.toString();
/*     */       }
/*     */     } 
/*     */     
/* 287 */     return "Product ID not found";
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean confirmDelivery(int paramInt) {
/* 292 */     if (this.mHelper == null) {
/* 293 */       return false;
/*     */     }
/*     */     
/* 296 */     return true;
/*     */   }
/*     */ 
/*     */   
/*     */   public void setPurchaseObserver(PurchaseObserver paramPurchaseObserver) {
/* 301 */     this.mPurchaseObserver = paramPurchaseObserver;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   Activity getActivity() {
/* 307 */     return this.mActivity;
/*     */   }
/*     */ 
/*     */   
/*     */   public void setActivity(Activity paramActivity) {
/* 312 */     this.mActivity = paramActivity;
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean setPurchaseProperty(String paramString1, String paramString2, String paramString3) {
/* 317 */     if (!this.itemProps.containsKey(paramString1))
/* 318 */       this.itemProps.put(paramString1, new HashMap<>()); 
/* 319 */     ((Map<String, String>)this.itemProps.get(paramString1)).put(paramString2, paramString3);
/*     */     
/* 321 */     return true;
/*     */   }
/*     */ 
/*     */   
/*     */   public String getPurchaseProperty(String paramString1, String paramString2) {
/* 326 */     BillingProvider.Log.d("GoogleBillingProvider", "Stored properties for productId :" + paramString1);
/* 327 */     Map map = this.itemProps.get(paramString1);
/* 328 */     if (map != null) {
/* 329 */       return (String)map.get(paramString2);
/*     */     }
/* 331 */     return "";
/*     */   }
/*     */ 
/*     */   
/*     */   public String getPurchaseList() {
/* 336 */     return this.ownedItems.toString();
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   boolean addPurchaseToLocalInventory(Purchase paramPurchase) {
/* 343 */     boolean bool = true;
/* 344 */     if (bool)
/* 345 */       bool = setPurchaseProperty(paramPurchase.getSku(), "productId", paramPurchase.getSku()); 
/* 346 */     if (bool) {
/* 347 */       bool = setPurchaseProperty(paramPurchase.getSku(), "itemType", paramPurchase.getItemType());
/*     */     }
/* 349 */     if (bool) {
/* 350 */       bool = setPurchaseProperty(paramPurchase.getSku(), "orderId", paramPurchase.getOrderId());
/*     */     }
/* 352 */     if (bool) {
/* 353 */       bool = setPurchaseProperty(paramPurchase.getSku(), "packageName", paramPurchase.getPackageName());
/*     */     }
/* 355 */     if (bool) {
/* 356 */       bool = setPurchaseProperty(paramPurchase.getSku(), "purchaseToken", paramPurchase.getToken());
/*     */     }
/* 358 */     if (bool) {
/* 359 */       bool = setPurchaseProperty(paramPurchase.getSku(), "signature", paramPurchase.getSignature());
/*     */     }
/* 361 */     if (bool) {
/* 362 */       bool = setPurchaseProperty(paramPurchase.getSku(), "developerPayload", paramPurchase.getDeveloperPayload());
/*     */     }
/* 364 */     if (bool) {
/* 365 */       bool = setPurchaseProperty(paramPurchase.getSku(), "purchaseTime", (new Long(paramPurchase.getPurchaseTime())).toString());
/*     */     }
/* 367 */     return bool;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   boolean loadKnownItemToLocalInventory(SkuDetails paramSkuDetails) {
/* 373 */     boolean bool = true;
/* 374 */     if (bool)
/* 375 */       bool = setPurchaseProperty(paramSkuDetails.getSku(), "productId", paramSkuDetails.getSku()); 
/* 376 */     if (bool) {
/* 377 */       bool = setPurchaseProperty(paramSkuDetails.getSku(), "itemType", paramSkuDetails.getType());
/*     */     }
/* 379 */     if (bool) {
/* 380 */       bool = setPurchaseProperty(paramSkuDetails.getSku(), "price", paramSkuDetails.getPrice());
/*     */     }
/* 382 */     if (bool) {
/* 383 */       bool = setPurchaseProperty(paramSkuDetails.getSku(), "title", paramSkuDetails.getTitle());
/*     */     }
/* 385 */     if (bool) {
/* 386 */       bool = setPurchaseProperty(paramSkuDetails.getSku(), "description", paramSkuDetails.getDescription());
/*     */     }
/* 388 */     return bool;
/*     */   }
/*     */ 
/*     */   
/*     */   void removePurchaseFromLocalInventory(Purchase paramPurchase) {
/* 393 */     this.ownedItems.remove(paramPurchase.getSku());
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   void complain(String paramString) {
/* 399 */     BillingProvider.Log.d("GoogleBillingProvider", "**** Error: " + paramString);
/* 400 */     alert("Error: " + paramString);
/*     */   }
/*     */ 
/*     */   
/*     */   void alert(String paramString) {
/* 405 */     AlertDialog.Builder builder = new AlertDialog.Builder((Context)getActivity());
/* 406 */     builder.setMessage(paramString);
/* 407 */     builder.setNeutralButton("OK", null);
/* 408 */     BillingProvider.Log.d("GoogleBillingProvider", "Showing alert dialog: " + paramString);
/* 409 */     builder.create().show();
/*     */   }
/*     */ 
/*     */ 
/*     */   
/* 414 */   IabHelper.OnIabPurchaseFinishedListener mPurchaseFinishedListener = new IabHelper.OnIabPurchaseFinishedListener()
/*     */     {
/*     */       
/*     */       public void onIabPurchaseFinished(IabResult param1IabResult, Purchase param1Purchase)
/*     */       {
/* 419 */         BillingProvider.Log.d("GoogleBillingProvider", "Purchase finished: " + param1IabResult + ", purchase: " + param1Purchase);
/*     */ 
/*     */         
/* 422 */         if (GoogleBillingProvider.this.mHelper == null) {
/*     */           return;
/*     */         }
/*     */ 
/*     */         
/* 427 */         if (param1IabResult.isFailure()) {
/*     */ 
/*     */           
/* 430 */           GoogleBillingProvider.this.mPurchaseObserver.onPurchaseStateChanged(GoogleBillingProvider.this.pendingPurchaseSku, GoogleBillingProvider.this.mapResponseCode(param1IabResult.getResponse()));
/* 431 */           GoogleBillingProvider.this.pendingPurchaseSku = "";
/*     */           
/*     */           return;
/*     */         } 
/* 435 */         if (!GoogleBillingProvider.this.verifyDeveloperPayload(param1Purchase)) {
/*     */           
/* 437 */           GoogleBillingProvider.this.complain("Error purchasing. Authenticity verification failed.");
/*     */           
/*     */           return;
/*     */         } 
/* 441 */         BillingProvider.Log.d("GoogleBillingProvider", "Purchase successful.");
/* 442 */         GoogleBillingProvider.this.pendingPurchaseSku = "";
/* 443 */         GoogleBillingProvider.this.ownedItems.add(param1Purchase.getSku());
/* 444 */         GoogleBillingProvider.this.addPurchaseToLocalInventory(param1Purchase);
/* 445 */         GoogleBillingProvider.this.offerPurchasedItems(param1Purchase);
/*     */       }
/*     */     };
/*     */ 
/*     */ 
/*     */   
/*     */   void offerPurchasedItems(Purchase paramPurchase) {
/* 452 */     if (paramPurchase != null) {
/* 453 */       this.mPurchaseObserver.onPurchaseStateChanged(paramPurchase.getSku(), mapResponseCode(paramPurchase.getPurchaseState()));
/*     */     }
/*     */   }
/*     */ 
/*     */   
/* 458 */   IabHelper.OnConsumeFinishedListener mConsumeFinishedListener = new IabHelper.OnConsumeFinishedListener()
/*     */     {
/*     */       public void onConsumeFinished(Purchase param1Purchase, IabResult param1IabResult)
/*     */       {
/* 462 */         BillingProvider.Log.d("GoogleBillingProvider", "Consumption finished. Purchase: " + param1Purchase + ", result: " + param1IabResult);
/*     */         
/* 464 */         if (param1IabResult.isSuccess()) {
/*     */           
/* 466 */           BillingProvider.Log.d("GoogleBillingProvider", "Consumption successful. Provisioning.");
/* 467 */           GoogleBillingProvider.this.removePurchaseFromLocalInventory(param1Purchase);
/*     */         }
/*     */         else {
/*     */           
/* 471 */           GoogleBillingProvider.this.complain("Error while consuming: " + param1IabResult);
/*     */         } 
/*     */         
/* 474 */         BillingProvider.Log.d("GoogleBillingProvider", "End consumption flow.");
/*     */       }
/*     */     };
/*     */ 
/*     */   
/* 479 */   IabHelper.QueryInventoryFinishedListener mGotInventoryListener = new IabHelper.QueryInventoryFinishedListener()
/*     */     {
/*     */       public void onQueryInventoryFinished(IabResult param1IabResult, Inventory param1Inventory)
/*     */       {
/* 483 */         BillingProvider.Log.d("GoogleBillingProvider", "Query inventory finished.");
/*     */ 
/*     */         
/* 486 */         if (GoogleBillingProvider.this.mHelper == null) {
/*     */           return;
/*     */         }
/* 489 */         if (param1IabResult.isFailure()) {
/*     */           
/* 491 */           GoogleBillingProvider.this.complain("Failed to query inventory: " + param1IabResult);
/*     */           
/*     */           return;
/*     */         } 
/* 495 */         BillingProvider.Log.d("GoogleBillingProvider", "Query inventory was successful.");
/*     */         
/* 497 */         BillingProvider.Log.d("GoogleBillingProvider", "Initial inventory query finished; enabling main UI.");
/*     */ 
/*     */ 
/*     */         
/* 501 */         boolean bool = false;
/*     */         
/* 503 */         List<Purchase> list = param1Inventory.getallpurchases();
/*     */         
/* 505 */         for (Purchase purchase : list) {
/*     */           
/* 507 */           GoogleBillingProvider.this.addPurchaseToLocalInventory(purchase);
/* 508 */           GoogleBillingProvider.this.ownedItems.add(purchase.getSku());
/*     */           
/* 510 */           GoogleBillingProvider.this.mPurchaseObserver.onPurchaseStateChanged(purchase.getSku(), 5);
/* 511 */           bool = true;
/*     */         } 
/*     */         
/* 514 */         if (!bool)
/*     */         {
/*     */           
/* 517 */           GoogleBillingProvider.this.mPurchaseObserver.onPurchaseStateChanged("", 5);
/*     */         }
/*     */       }
/*     */     };
/*     */ 
/*     */ 
/*     */   
/*     */   boolean verifyDeveloperPayload(Purchase paramPurchase) {
/* 525 */     String str = paramPurchase.getDeveloperPayload();
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
/* 550 */     return true;
/*     */   }
/*     */ 
/*     */   
/*     */   public void onActivityResult(int paramInt1, int paramInt2, Intent paramIntent) {
/* 555 */     BillingProvider.Log.d("GoogleBillingProvider", "onActivityResult(" + paramInt1 + "," + paramInt2 + "," + paramIntent);
/*     */ 
/*     */     
/* 558 */     if (!this.mHelper.handleActivityResult(paramInt1, paramInt2, paramIntent)) {
/*     */ 
/*     */       
/* 561 */       BillingProvider.Log.d("GoogleBillingProvider", "onActivityResult NOT handled by IABUtil.");
/*     */     }
/*     */     else {
/*     */       
/* 565 */       BillingProvider.Log.d("GoogleBillingProvider", "onActivityResult handled by IABUtil.");
/*     */     } 
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   int mapResponseCode(int paramInt) {
/* 573 */     switch (paramInt)
/*     */     
/*     */     { case 0:
/* 576 */         b = 0;
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
/* 595 */         return b;case 1: b = 1; return b;case 4: b = 2; return b;case 7: b = 3; return b; }  byte b = 1; return b;
/*     */   }
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/billing/google/GoogleBillingProvider.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */