/*     */ package com.runrev.android.billing.google;
/*     */ 
/*     */ import android.text.TextUtils;
/*     */ import android.util.Log;
/*     */ import java.security.InvalidKeyException;
/*     */ import java.security.KeyFactory;
/*     */ import java.security.NoSuchAlgorithmException;
/*     */ import java.security.PublicKey;
/*     */ import java.security.SecureRandom;
/*     */ import java.security.Signature;
/*     */ import java.security.SignatureException;
/*     */ import java.security.spec.InvalidKeySpecException;
/*     */ import java.security.spec.X509EncodedKeySpec;
/*     */ import java.util.HashSet;
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
/*     */ public class Security
/*     */ {
/*     */   private static final String TAG = "IABUtil/Security";
/*     */   private static final String KEY_FACTORY_ALGORITHM = "RSA";
/*     */   private static final String SIGNATURE_ALGORITHM = "SHA1withRSA";
/*  49 */   private static final SecureRandom RANDOM = new SecureRandom();
/*     */   
/*  51 */   private static HashSet<Long> sKnownNonces = new HashSet<>();
/*     */   
/*  53 */   private static byte[] sPublicKey = null;
/*     */ 
/*     */   
/*     */   public static long generateNonce() {
/*  57 */     long l = RANDOM.nextLong();
/*  58 */     sKnownNonces.add(Long.valueOf(l));
/*  59 */     return l;
/*     */   }
/*     */ 
/*     */   
/*     */   public static void removeNonce(long paramLong) {
/*  64 */     sKnownNonces.remove(Long.valueOf(paramLong));
/*     */   }
/*     */ 
/*     */   
/*     */   public static boolean isNonceKnown(long paramLong) {
/*  69 */     return sKnownNonces.contains(Long.valueOf(paramLong));
/*     */   }
/*     */ 
/*     */   
/*     */   public static void setPublicKey(byte[] paramArrayOfbyte) {
/*  74 */     sPublicKey = paramArrayOfbyte;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public static boolean setPublicKey(String paramString) {
/*  80 */     if (paramString == null) {
/*     */       
/*  82 */       sPublicKey = null;
/*  83 */       return true;
/*     */     } 
/*     */ 
/*     */     
/*     */     try {
/*  88 */       byte[] arrayOfByte = Base64.decode(paramString);
/*  89 */       setPublicKey(arrayOfByte);
/*  90 */       return true;
/*     */     
/*     */     }
/*  93 */     catch (Base64DecoderException base64DecoderException) {
/*     */       
/*  95 */       Log.e("IABUtil/Security", "Base64 decoding failed.");
/*  96 */       throw new IllegalArgumentException(base64DecoderException);
/*     */     } 
/*     */   }
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
/*     */   public static boolean verifyPurchase(String paramString1, String paramString2, String paramString3) {
/* 117 */     if (TextUtils.isEmpty(paramString2) || TextUtils.isEmpty(paramString1) || 
/* 118 */       TextUtils.isEmpty(paramString3)) {
/* 119 */       Log.e("IABUtil/Security", "Purchase verification failed: missing data.");
/* 120 */       return false;
/*     */     } 
/*     */     
/* 123 */     PublicKey publicKey = generatePublicKey(paramString1);
/* 124 */     return verify(publicKey, paramString2, paramString3);
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public static PublicKey generatePublicKey(String paramString) {
/*     */     try {
/* 136 */       byte[] arrayOfByte = Base64.decode(paramString);
/* 137 */       KeyFactory keyFactory = KeyFactory.getInstance("RSA");
/* 138 */       return keyFactory.generatePublic(new X509EncodedKeySpec(arrayOfByte));
/* 139 */     } catch (NoSuchAlgorithmException noSuchAlgorithmException) {
/* 140 */       throw new RuntimeException(noSuchAlgorithmException);
/* 141 */     } catch (InvalidKeySpecException invalidKeySpecException) {
/* 142 */       Log.e("IABUtil/Security", "Invalid key specification.");
/* 143 */       throw new IllegalArgumentException(invalidKeySpecException);
/* 144 */     } catch (Base64DecoderException base64DecoderException) {
/* 145 */       Log.e("IABUtil/Security", "Base64 decoding failed.");
/* 146 */       throw new IllegalArgumentException(base64DecoderException);
/*     */     } 
/*     */   }
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
/*     */   public static boolean verify(PublicKey paramPublicKey, String paramString1, String paramString2) {
/*     */     try {
/* 162 */       Signature signature = Signature.getInstance("SHA1withRSA");
/* 163 */       signature.initVerify(paramPublicKey);
/* 164 */       signature.update(paramString1.getBytes());
/* 165 */       if (!signature.verify(Base64.decode(paramString2))) {
/* 166 */         Log.e("IABUtil/Security", "Signature verification failed.");
/* 167 */         return false;
/*     */       } 
/* 169 */       return true;
/* 170 */     } catch (NoSuchAlgorithmException noSuchAlgorithmException) {
/* 171 */       Log.e("IABUtil/Security", "NoSuchAlgorithmException.");
/* 172 */     } catch (InvalidKeyException invalidKeyException) {
/* 173 */       Log.e("IABUtil/Security", "Invalid key specification.");
/* 174 */     } catch (SignatureException signatureException) {
/* 175 */       Log.e("IABUtil/Security", "Signature exception.");
/* 176 */     } catch (Base64DecoderException base64DecoderException) {
/* 177 */       Log.e("IABUtil/Security", "Base64 decoding failed.");
/*     */     } 
/* 179 */     return false;
/*     */   }
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/billing/google/Security.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */