/*    */ package com.runrev.android.billing.google;
/*    */ 
/*    */ import java.util.ArrayList;
/*    */ import java.util.HashMap;
/*    */ import java.util.List;
/*    */ import java.util.Map;
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
/*    */ public class Inventory
/*    */ {
/* 28 */   Map<String, SkuDetails> mSkuMap = new HashMap<>();
/* 29 */   Map<String, Purchase> mPurchaseMap = new HashMap<>();
/*    */ 
/*    */ 
/*    */ 
/*    */   
/*    */   public SkuDetails getSkuDetails(String paramString) {
/* 35 */     return this.mSkuMap.get(paramString);
/*    */   }
/*    */ 
/*    */   
/*    */   public Purchase getPurchase(String paramString) {
/* 40 */     return this.mPurchaseMap.get(paramString);
/*    */   }
/*    */ 
/*    */   
/*    */   public boolean hasPurchase(String paramString) {
/* 45 */     return this.mPurchaseMap.containsKey(paramString);
/*    */   }
/*    */ 
/*    */   
/*    */   public boolean hasDetails(String paramString) {
/* 50 */     return this.mSkuMap.containsKey(paramString);
/*    */   }
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */   
/*    */   public void erasePurchase(String paramString) {
/* 62 */     if (this.mPurchaseMap.containsKey(paramString)) this.mPurchaseMap.remove(paramString);
/*    */   
/*    */   }
/*    */   
/*    */   List<String> getAllOwnedSkus() {
/* 67 */     return new ArrayList<>(this.mPurchaseMap.keySet());
/*    */   }
/*    */ 
/*    */   
/*    */   List<String> getAllOwnedSkus(String paramString) {
/* 72 */     ArrayList<String> arrayList = new ArrayList();
/* 73 */     for (Purchase purchase : this.mPurchaseMap.values()) {
/* 74 */       if (purchase.getItemType().equals(paramString)) arrayList.add(purchase.getSku()); 
/*    */     } 
/* 76 */     return arrayList;
/*    */   }
/*    */ 
/*    */   
/*    */   List<Purchase> getAllPurchases() {
/* 81 */     return new ArrayList<>(this.mPurchaseMap.values());
/*    */   }
/*    */ 
/*    */   
/*    */   public List<Purchase> getallpurchases() {
/* 86 */     return getAllPurchases();
/*    */   }
/*    */   
/*    */   void addSkuDetails(SkuDetails paramSkuDetails) {
/* 90 */     this.mSkuMap.put(paramSkuDetails.getSku(), paramSkuDetails);
/*    */   }
/*    */   
/*    */   void addPurchase(Purchase paramPurchase) {
/* 94 */     this.mPurchaseMap.put(paramPurchase.getSku(), paramPurchase);
/*    */   }
/*    */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/billing/google/Inventory.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */