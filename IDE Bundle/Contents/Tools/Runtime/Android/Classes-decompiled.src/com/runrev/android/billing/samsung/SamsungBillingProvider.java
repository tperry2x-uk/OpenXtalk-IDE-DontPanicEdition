/*     */ package com.runrev.android.billing.samsung;
/*     */ import android.app.Activity;
/*     */ import android.content.Context;
/*     */ import android.content.Intent;
/*     */ import android.os.Bundle;
/*     */ import com.runrev.android.Engine;
/*     */ import com.runrev.android.billing.BillingProvider;
/*     */ import com.runrev.android.billing.PurchaseObserver;
/*     */ import com.sec.android.iap.sample.helper.SamsungIapHelper;
/*     */ import com.sec.android.iap.sample.vo.BaseVO;
/*     */ import com.sec.android.iap.sample.vo.InBoxVO;
/*     */ import com.sec.android.iap.sample.vo.ItemVO;
/*     */ import com.sec.android.iap.sample.vo.PurchaseVO;
/*     */ import java.text.SimpleDateFormat;
/*     */ import java.util.ArrayList;
/*     */ import java.util.Date;
/*     */ import java.util.HashMap;
/*     */ import java.util.HashSet;
/*     */ import java.util.List;
/*     */ import java.util.Locale;
/*     */ import java.util.Map;
/*     */ import java.util.Set;
/*     */ 
/*     */ public class SamsungBillingProvider implements BillingProvider {
/*     */   public static final String TAG = "SamsungBillingProvider";
/*     */   private Activity mActivity;
/*  27 */   private Boolean started = Boolean.valueOf(false);
/*     */ 
/*     */ 
/*     */   
/*     */   private PurchaseObserver mPurchaseObserver;
/*     */ 
/*     */   
/*  34 */   private static String mode = Engine.doGetCustomPropertyValue("cREVStandaloneSettings", "android,samsungIapMode");
/*  35 */   private static final int iapMode = Integer.parseInt(mode);
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*  41 */   private String itemGroupId = null;
/*  42 */   private String pendingPurchaseItemId = null;
/*     */   private boolean prepared = false;
/*     */   private boolean isInitialized = false;
/*     */   private static final int ITEM_AMOUNT = 25;
/*  46 */   private List<ItemVO> knownItems = new ArrayList<>();
/*  47 */   private Set<String> ownedItems = new HashSet<>();
/*     */   
/*  49 */   private Map<String, Map<String, String>> itemProps = new HashMap<>();
/*     */ 
/*     */ 
/*     */   
/*  53 */   SamsungIapHelper.OnInitIapListener mInitIapListener = new SamsungIapHelper.OnInitIapListener()
/*     */     {
/*     */       public void onSucceedInitIap()
/*     */       {
/*  57 */         SamsungIapHelper samsungIapHelper = SamsungIapHelper.getInstance((Context)SamsungBillingProvider.this.getActivity(), SamsungBillingProvider.iapMode);
/*  58 */         samsungIapHelper.safeGetItemList(SamsungBillingProvider.this.getActivity(), SamsungBillingProvider.this.itemGroupId, 1, 26, "10");
/*     */       }
/*     */     };
/*     */   
/*  62 */   SamsungIapHelper.OnGetItemListListener mGetItemListListener = new SamsungIapHelper.OnGetItemListListener()
/*     */     {
/*     */       public void onSucceedGetItemList(ArrayList<ItemVO> param1ArrayList)
/*     */       {
/*  66 */         SamsungBillingProvider.this.knownItems.addAll(param1ArrayList);
/*  67 */         for (ItemVO itemVO : param1ArrayList) {
/*  68 */           SamsungBillingProvider.this.loadItemToLocalInventory(itemVO);
/*     */         }
/*  70 */         SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyyMMdd", Locale.getDefault());
/*  71 */         String str = simpleDateFormat.format(new Date());
/*     */         
/*  73 */         SamsungIapHelper samsungIapHelper = SamsungIapHelper.getInstance((Context)SamsungBillingProvider.this.getActivity(), SamsungBillingProvider.iapMode);
/*  74 */         samsungIapHelper.safeGetItemInboxTask(SamsungBillingProvider.this.getActivity(), SamsungBillingProvider.this.itemGroupId, 1, 26, "20131001", str);
/*     */       }
/*     */     };
/*     */   
/*  78 */   SamsungIapHelper.OnGetInboxListListener mGetInboxListListener = new SamsungIapHelper.OnGetInboxListListener()
/*     */     {
/*     */ 
/*     */       
/*     */       public void OnSucceedGetInboxList(ArrayList<InBoxVO> param1ArrayList)
/*     */       {
/*  84 */         boolean bool = false;
/*     */         
/*  86 */         for (InBoxVO inBoxVO : param1ArrayList) {
/*     */           
/*  88 */           String str = inBoxVO.getItemId();
/*  89 */           SamsungBillingProvider.this.ownedItems.add(str);
/*  90 */           SamsungBillingProvider.this.loadInboxToLocalInventory(inBoxVO);
/*     */ 
/*     */ 
/*     */           
/*  94 */           if (!inBoxVO.getType().equals("00")) {
/*     */             
/*  96 */             BillingProvider.Log.d("SamsungBillingProvider", "Item restored :" + str);
/*     */             
/*  98 */             SamsungBillingProvider.this.mPurchaseObserver.onPurchaseStateChanged(str, 5);
/*  99 */             bool = true;
/*     */           } 
/*     */         } 
/*     */ 
/*     */         
/* 104 */         if (!bool)
/*     */         {
/*     */           
/* 107 */           SamsungBillingProvider.this.mPurchaseObserver.onPurchaseStateChanged("", 5);
/*     */         }
/*     */         
/* 110 */         if (SamsungBillingProvider.this.pendingPurchaseItemId != null) {
/*     */           
/* 112 */           SamsungBillingProvider.this.startPurchase(SamsungBillingProvider.this.pendingPurchaseItemId);
/* 113 */           SamsungBillingProvider.this.pendingPurchaseItemId = null;
/*     */         }
/*     */         else {
/*     */           
/* 117 */           SamsungIapHelper samsungIapHelper = SamsungIapHelper.getInstance((Context)SamsungBillingProvider.this.getActivity(), SamsungBillingProvider.iapMode);
/* 118 */           samsungIapHelper.showProgressDialog((Context)SamsungBillingProvider.this.getActivity());
/* 119 */           samsungIapHelper.dismissProgressDialog();
/*     */         } 
/*     */       }
/*     */     };
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   boolean loadBaseToLocalInventory(BaseVO paramBaseVO) {
/* 131 */     boolean bool = true;
/*     */     
/* 133 */     if (bool)
/*     */     {
/* 135 */       bool = setPurchaseProperty(paramBaseVO.getItemId(), "productId", paramBaseVO.getItemId());
/*     */     }
/* 137 */     if (bool)
/*     */     {
/* 139 */       bool = setPurchaseProperty(paramBaseVO.getItemId(), "title", paramBaseVO.getItemName());
/*     */     }
/* 141 */     if (bool)
/*     */     {
/* 143 */       bool = setPurchaseProperty(paramBaseVO.getItemId(), "price", paramBaseVO.getItemPriceString());
/*     */     }
/* 145 */     if (bool)
/*     */     {
/* 147 */       bool = setPurchaseProperty(paramBaseVO.getItemId(), "currencyUnit", paramBaseVO.getCurrencyUnit());
/*     */     }
/* 149 */     if (bool)
/*     */     {
/* 151 */       bool = setPurchaseProperty(paramBaseVO.getItemId(), "description", paramBaseVO.getItemDesc());
/*     */     }
/* 153 */     if (bool)
/*     */     {
/* 155 */       bool = setPurchaseProperty(paramBaseVO.getItemId(), "itemImageUrl", paramBaseVO.getItemImageUrl());
/*     */     }
/* 157 */     if (bool)
/*     */     {
/* 159 */       bool = setPurchaseProperty(paramBaseVO.getItemId(), "itemDownloadUrl", paramBaseVO.getItemDownloadUrl());
/*     */     }
/* 161 */     return bool;
/*     */   }
/*     */ 
/*     */   
/*     */   boolean addPurchaseToLocalInventory(PurchaseVO paramPurchaseVO) {
/* 166 */     boolean bool = loadBaseToLocalInventory((BaseVO)paramPurchaseVO);
/*     */     
/* 168 */     if (bool) {
/* 169 */       bool = setPurchaseProperty(paramPurchaseVO.getItemId(), "paymentId", paramPurchaseVO.getPaymentId());
/*     */     }
/* 171 */     if (bool) {
/* 172 */       bool = setPurchaseProperty(paramPurchaseVO.getItemId(), "purchaseId", paramPurchaseVO.getPurchaseId());
/*     */     }
/* 174 */     if (bool) {
/* 175 */       bool = setPurchaseProperty(paramPurchaseVO.getItemId(), "purchaseDate", paramPurchaseVO.getPurchaseDate());
/*     */     }
/* 177 */     if (bool)
/* 178 */       bool = setPurchaseProperty(paramPurchaseVO.getItemId(), "verifyUrl", paramPurchaseVO.getVerifyUrl()); 
/* 179 */     return bool;
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   boolean loadInboxToLocalInventory(InBoxVO paramInBoxVO) {
/* 186 */     boolean bool = loadBaseToLocalInventory((BaseVO)paramInBoxVO);
/*     */     
/* 188 */     if (bool) {
/* 189 */       bool = setPurchaseProperty(paramInBoxVO.getItemId(), "paymentId", paramInBoxVO.getPaymentId());
/*     */     }
/* 191 */     if (bool) {
/* 192 */       bool = setPurchaseProperty(paramInBoxVO.getItemId(), "subscriptionEndDate", paramInBoxVO.getSubscriptionEndDate());
/*     */     }
/* 194 */     if (bool) {
/* 195 */       bool = setPurchaseProperty(paramInBoxVO.getItemId(), "purchaseDate", paramInBoxVO.getPurchaseDate());
/*     */     }
/* 197 */     if (bool) {
/* 198 */       bool = setPurchaseProperty(paramInBoxVO.getItemId(), "itemType", paramInBoxVO.getType());
/*     */     }
/* 200 */     return bool;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   boolean loadItemToLocalInventory(ItemVO paramItemVO) {
/* 206 */     boolean bool = loadBaseToLocalInventory((BaseVO)paramItemVO);
/*     */     
/* 208 */     if (bool) {
/* 209 */       bool = setPurchaseProperty(paramItemVO.getItemId(), "itemType", paramItemVO.getType());
/*     */     }
/*     */     
/* 212 */     if (bool && paramItemVO.getType().equals("02")) {
/* 213 */       bool = setPurchaseProperty(paramItemVO.getItemId(), "subscriptionDurationUnit", paramItemVO.getSubscriptionDurationUnit());
/*     */     }
/* 215 */     if (bool && paramItemVO.getType().equals("02")) {
/* 216 */       bool = setPurchaseProperty(paramItemVO.getItemId(), "subscriptionDurationMultiplier", paramItemVO.getSubscriptionDurationMultiplier());
/*     */     }
/* 218 */     return bool;
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   private void initHelper() {
/* 227 */     if (this.prepared) {
/*     */       return;
/*     */     }
/*     */     
/* 231 */     this.prepared = true;
/*     */     
/* 233 */     getActivity().runOnUiThread(new Runnable()
/*     */         {
/*     */           
/*     */           public void run()
/*     */           {
/* 238 */             SamsungIapHelper samsungIapHelper = SamsungIapHelper.getInstance((Context)SamsungBillingProvider.this.getActivity(), SamsungBillingProvider.iapMode);
/* 239 */             samsungIapHelper.setOnInitIapListener(SamsungBillingProvider.this.mInitIapListener);
/* 240 */             samsungIapHelper.setOnGetItemListListener(SamsungBillingProvider.this.mGetItemListListener);
/* 241 */             samsungIapHelper.setOnGetInboxListListener(SamsungBillingProvider.this.mGetInboxListListener);
/*     */             
/* 243 */             if (samsungIapHelper.isInstalledIapPackage((Context)SamsungBillingProvider.this.getActivity())) {
/*     */               
/* 245 */               if (!samsungIapHelper.isValidIapPackage((Context)SamsungBillingProvider.this.getActivity()))
/*     */               {
/* 247 */                 samsungIapHelper.showIapDialog(SamsungBillingProvider.this.getActivity(), "title_iap", "msg_invalid_iap_package", true, null);
/*     */               }
/*     */             }
/*     */             else {
/*     */               
/* 252 */               samsungIapHelper.installIapPackage(SamsungBillingProvider.this.getActivity());
/*     */             } 
/*     */           }
/*     */         });
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   private void startPurchase(String paramString) {
/* 262 */     if (!this.isInitialized) {
/*     */       
/* 264 */       this.isInitialized = true;
/* 265 */       this.pendingPurchaseItemId = paramString;
/*     */       
/* 267 */       getActivity().runOnUiThread(new Runnable()
/*     */           {
/*     */             
/*     */             public void run()
/*     */             {
/* 272 */               SamsungIapHelper samsungIapHelper = SamsungIapHelper.getInstance((Context)SamsungBillingProvider.this.getActivity(), SamsungBillingProvider.iapMode);
/* 273 */               samsungIapHelper.showProgressDialog((Context)SamsungBillingProvider.this.getActivity());
/* 274 */               samsungIapHelper.startAccountActivity(SamsungBillingProvider.this.getActivity());
/*     */             }
/*     */           });
/*     */ 
/*     */       
/*     */       return;
/*     */     } 
/*     */ 
/*     */     
/* 283 */     SamsungIapHelper samsungIapHelper = SamsungIapHelper.getInstance((Context)getActivity(), iapMode);
/* 284 */     samsungIapHelper.showProgressDialog((Context)getActivity());
/* 285 */     samsungIapHelper.startPurchase(getActivity(), 100, this.itemGroupId, paramString);
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   private void handleRequestCertification(int paramInt1, int paramInt2, Intent paramIntent) {
/* 293 */     if (paramInt2 == -1) {
/*     */       
/* 295 */       bindIapService();
/*     */     }
/* 297 */     else if (paramInt2 == 0) {
/*     */       
/* 299 */       SamsungIapHelper samsungIapHelper = SamsungIapHelper.getInstance((Context)getActivity(), iapMode);
/* 300 */       samsungIapHelper.dismissProgressDialog();
/* 301 */       samsungIapHelper.showIapDialog(getActivity(), "title_samsungaccount_authentication", "msg_authentication_has_been_cancelled", false, null);
/*     */     } 
/*     */   }
/*     */ 
/*     */   
/*     */   private void handleRequestPayment(int paramInt1, int paramInt2, Intent paramIntent) {
/* 307 */     if (paramIntent == null) {
/*     */       return;
/*     */     }
/*     */ 
/*     */     
/* 312 */     Bundle bundle = paramIntent.getExtras();
/* 313 */     String str1 = "";
/* 314 */     String str2 = "";
/* 315 */     int i = 1;
/* 316 */     String str3 = "";
/* 317 */     PurchaseVO purchaseVO = null;
/* 318 */     SamsungIapHelper samsungIapHelper = SamsungIapHelper.getInstance((Context)getActivity(), iapMode);
/*     */     
/* 320 */     if (bundle != null) {
/*     */       
/* 322 */       str2 = bundle.getString("THIRD_PARTY_NAME");
/* 323 */       i = bundle.getInt("STATUS_CODE");
/* 324 */       str3 = bundle.getString("ERROR_STRING");
/* 325 */       str1 = bundle.getString("ITEM_ID");
/*     */     }
/*     */     else {
/*     */       
/* 329 */       samsungIapHelper.dismissProgressDialog();
/* 330 */       samsungIapHelper.showIapDialog(getActivity(), "title_iap", "msg_payment_was_not_processed_successfully", false, null);
/*     */     } 
/*     */     
/* 333 */     if (paramInt2 == -1) {
/*     */       
/* 335 */       if (i == 0)
/*     */       {
/* 337 */         purchaseVO = new PurchaseVO(bundle.getString("RESULT_OBJECT"));
/* 338 */         samsungIapHelper.verifyPurchaseResult(getActivity(), purchaseVO);
/* 339 */         this.ownedItems.add(str1);
/* 340 */         addPurchaseToLocalInventory(purchaseVO);
/*     */       }
/*     */       else
/*     */       {
/* 344 */         BillingProvider.Log.d("SamsungBillingProvider", "StatusCode is : " + i);
/* 345 */         samsungIapHelper.dismissProgressDialog();
/* 346 */         samsungIapHelper.showIapDialog(getActivity(), "title_iap", str3, false, null);
/*     */       }
/*     */     
/* 349 */     } else if (paramInt2 == 0) {
/*     */       
/* 351 */       samsungIapHelper.dismissProgressDialog();
/* 352 */       samsungIapHelper.showIapDialog(getActivity(), "title_iap", "msg_payment_cancelled", false, null);
/*     */     } 
/*     */     
/* 355 */     this.mPurchaseObserver.onPurchaseStateChanged(str1, mapResponseCode(i));
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public void bindIapService() {
/* 363 */     SamsungIapHelper samsungIapHelper = SamsungIapHelper.getInstance((Context)getActivity(), iapMode);
/* 364 */     samsungIapHelper.bindIapService(new SamsungIapHelper.OnIapBindListener()
/*     */         {
/*     */           
/*     */           public void onBindIapFinished(int param1Int)
/*     */           {
/* 369 */             SamsungIapHelper samsungIapHelper = SamsungIapHelper.getInstance((Context)SamsungBillingProvider.this.getActivity(), SamsungBillingProvider.iapMode);
/* 370 */             if (SamsungBillingProvider.this.pendingPurchaseItemId == null)
/*     */             {
/* 372 */               samsungIapHelper.dismissProgressDialog();
/*     */             }
/*     */             
/* 375 */             if (param1Int == 0) {
/*     */               
/* 377 */               samsungIapHelper.safeInitIap(SamsungBillingProvider.this.getActivity());
/*     */             }
/*     */             else {
/*     */               
/* 381 */               samsungIapHelper.showIapDialog(SamsungBillingProvider.this.getActivity(), "title_iap", "msg_iap_service_bind_failed", false, null);
/*     */             } 
/*     */           }
/*     */         });
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public void initBilling() {
/* 391 */     this.itemGroupId = Engine.doGetCustomPropertyValue("cREVStandaloneSettings", "android,samsungItemGroupId");
/*     */     
/* 393 */     initHelper();
/* 394 */     this.started = Boolean.valueOf(true);
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public void onDestroy() {}
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean canMakePurchase() {
/* 404 */     if (!this.started.booleanValue())
/* 405 */       return false; 
/* 406 */     return true;
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean enableUpdates() {
/* 411 */     if (!this.started.booleanValue()) {
/* 412 */       return false;
/*     */     }
/* 414 */     return true;
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean disableUpdates() {
/* 419 */     if (!this.started.booleanValue()) {
/* 420 */       return false;
/*     */     }
/* 422 */     return true;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean restorePurchases() {
/* 428 */     if (!this.started.booleanValue()) {
/* 429 */       return false;
/*     */     }
/* 431 */     if (!this.isInitialized) {
/*     */       
/* 433 */       this.isInitialized = true;
/*     */       
/* 435 */       getActivity().runOnUiThread(new Runnable()
/*     */           {
/*     */             
/*     */             public void run()
/*     */             {
/* 440 */               SamsungIapHelper samsungIapHelper = SamsungIapHelper.getInstance((Context)SamsungBillingProvider.this.getActivity(), SamsungBillingProvider.iapMode);
/* 441 */               samsungIapHelper.showProgressDialog((Context)SamsungBillingProvider.this.getActivity());
/* 442 */               samsungIapHelper.startAccountActivity(SamsungBillingProvider.this.getActivity());
/*     */             }
/*     */           });
/*     */ 
/*     */       
/* 447 */       return true;
/*     */     } 
/* 449 */     return false;
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean sendRequest(int paramInt, String paramString1, String paramString2) {
/* 454 */     if (!this.started.booleanValue()) {
/* 455 */       return false;
/*     */     }
/* 457 */     startPurchase(paramString1);
/* 458 */     return true;
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean makePurchase(String paramString1, String paramString2, String paramString3) {
/* 463 */     if (!this.started.booleanValue()) {
/* 464 */       return false;
/*     */     }
/* 466 */     startPurchase(paramString1);
/* 467 */     return true;
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean productSetType(String paramString1, String paramString2) {
/* 472 */     return true;
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean consumePurchase(String paramString) {
/* 477 */     if (this.ownedItems.contains(paramString))
/* 478 */       this.ownedItems.remove(paramString); 
/* 479 */     return true;
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean requestProductDetails(String paramString) {
/* 484 */     for (ItemVO itemVO : this.knownItems) {
/*     */       
/* 486 */       if (itemVO.getItemId().equals(paramString)) {
/*     */         
/* 488 */         BillingProvider.Log.d("SamsungBillingProvider", "Requested item details : \n" + itemVO.dump());
/* 489 */         this.mPurchaseObserver.onProductDetailsReceived(paramString);
/* 490 */         return true;
/*     */       } 
/*     */     } 
/*     */ 
/*     */     
/* 495 */     this.mPurchaseObserver.onProductDetailsError(paramString, "No product found with the specified ID");
/* 496 */     BillingProvider.Log.d("SamsungBillingProvider", " Item not found. (Item : " + paramString + ")");
/*     */     
/* 498 */     return false;
/*     */   }
/*     */ 
/*     */   
/*     */   public String receiveProductDetails(String paramString) {
/* 503 */     for (ItemVO itemVO : this.knownItems) {
/*     */       
/* 505 */       if (itemVO.getItemId().equals(paramString)) {
/*     */         
/* 507 */         BillingProvider.Log.d("SamsungBillingProvider", "Requested item details : \n" + itemVO.dump());
/* 508 */         return itemVO.dump();
/*     */       } 
/*     */     } 
/*     */ 
/*     */     
/* 513 */     BillingProvider.Log.d("SamsungBillingProvider", " Item not found. (Item : " + paramString + ")");
/* 514 */     return "Product ID not found";
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean setPurchaseProperty(String paramString1, String paramString2, String paramString3) {
/* 519 */     if (!this.itemProps.containsKey(paramString1))
/* 520 */       this.itemProps.put(paramString1, new HashMap<>()); 
/* 521 */     ((Map<String, String>)this.itemProps.get(paramString1)).put(paramString2, paramString3);
/*     */     
/* 523 */     return true;
/*     */   }
/*     */ 
/*     */   
/*     */   public String getPurchaseProperty(String paramString1, String paramString2) {
/* 528 */     BillingProvider.Log.d("SamsungBillingProvider", "Stored properties for productId :" + paramString1);
/* 529 */     Map map = this.itemProps.get(paramString1);
/* 530 */     if (map != null) {
/* 531 */       return (String)map.get(paramString2);
/*     */     }
/* 533 */     return "";
/*     */   }
/*     */ 
/*     */   
/*     */   public String getPurchaseList() {
/* 538 */     return this.ownedItems.toString();
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean confirmDelivery(int paramInt) {
/* 543 */     if (!this.started.booleanValue()) {
/* 544 */       return false;
/*     */     }
/* 546 */     return true;
/*     */   }
/*     */ 
/*     */   
/*     */   public void setPurchaseObserver(PurchaseObserver paramPurchaseObserver) {
/* 551 */     this.mPurchaseObserver = paramPurchaseObserver;
/*     */   }
/*     */ 
/*     */   
/*     */   public Activity getActivity() {
/* 556 */     return this.mActivity;
/*     */   }
/*     */ 
/*     */   
/*     */   public void setActivity(Activity paramActivity) {
/* 561 */     this.mActivity = paramActivity;
/*     */   }
/*     */ 
/*     */   
/*     */   public void onActivityResult(int paramInt1, int paramInt2, Intent paramIntent) {
/* 566 */     switch (paramInt1) {
/*     */ 
/*     */       
/*     */       case 101:
/* 570 */         handleRequestCertification(paramInt1, paramInt2, paramIntent);
/*     */         break;
/*     */ 
/*     */       
/*     */       case 100:
/* 575 */         handleRequestPayment(paramInt1, paramInt2, paramIntent);
/*     */         break;
/*     */     } 
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   int mapResponseCode(int paramInt) {
/* 584 */     switch (paramInt)
/*     */     
/*     */     { case 0:
/* 587 */         b = 0;
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
/* 606 */         return b;case 1: b = 1; return b;case -1005: b = 2; return b;case -1003: b = 3; return b; }  byte b = 1; return b;
/*     */   }
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/billing/samsung/SamsungBillingProvider.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */