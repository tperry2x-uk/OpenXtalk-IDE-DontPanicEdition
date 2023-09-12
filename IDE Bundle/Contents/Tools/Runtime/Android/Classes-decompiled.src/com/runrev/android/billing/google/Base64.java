/*     */ package com.runrev.android.billing.google;
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
/*     */ public class Base64
/*     */ {
/*     */   public static final boolean ENCODE = true;
/*     */   public static final boolean DECODE = false;
/*     */   private static final byte EQUALS_SIGN = 61;
/*     */   private static final byte NEW_LINE = 10;
/*  57 */   private static final byte[] ALPHABET = new byte[] { 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47 };
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
/*  75 */   private static final byte[] WEBSAFE_ALPHABET = new byte[] { 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 45, 95 };
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
/*  94 */   private static final byte[] DECODABET = new byte[] { -9, -9, -9, -9, -9, -9, -9, -9, -9, -5, -5, -9, -9, -5, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -5, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, 62, -9, -9, -9, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -9, -9, -9, -1, -9, -9, -9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -9, -9, -9, -9, -9, -9, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -9, -9, -9, -9, -9 };
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
/*     */ 
/*     */ 
/*     */   
/* 128 */   private static final byte[] WEBSAFE_DECODABET = new byte[] { -9, -9, -9, -9, -9, -9, -9, -9, -9, -5, -5, -9, -9, -5, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -5, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, 62, -9, -9, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -9, -9, -9, -1, -9, -9, -9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -9, -9, -9, -9, 63, -9, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -9, -9, -9, -9, -9 };
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
/*     */   private static final byte WHITE_SPACE_ENC = -5;
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
/*     */   private static final byte EQUALS_SIGN_ENC = -1;
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
/*     */   private static byte[] encode3to4(byte[] paramArrayOfbyte1, int paramInt1, int paramInt2, byte[] paramArrayOfbyte2, int paramInt3, byte[] paramArrayOfbyte3) {
/* 209 */     int i = ((paramInt2 > 0) ? (paramArrayOfbyte1[paramInt1] << 24 >>> 8) : 0) | ((paramInt2 > 1) ? (paramArrayOfbyte1[paramInt1 + 1] << 24 >>> 16) : 0) | ((paramInt2 > 2) ? (paramArrayOfbyte1[paramInt1 + 2] << 24 >>> 24) : 0);
/*     */ 
/*     */ 
/*     */ 
/*     */     
/* 214 */     switch (paramInt2) {
/*     */       case 3:
/* 216 */         paramArrayOfbyte2[paramInt3] = paramArrayOfbyte3[i >>> 18];
/* 217 */         paramArrayOfbyte2[paramInt3 + 1] = paramArrayOfbyte3[i >>> 12 & 0x3F];
/* 218 */         paramArrayOfbyte2[paramInt3 + 2] = paramArrayOfbyte3[i >>> 6 & 0x3F];
/* 219 */         paramArrayOfbyte2[paramInt3 + 3] = paramArrayOfbyte3[i & 0x3F];
/* 220 */         return paramArrayOfbyte2;
/*     */       case 2:
/* 222 */         paramArrayOfbyte2[paramInt3] = paramArrayOfbyte3[i >>> 18];
/* 223 */         paramArrayOfbyte2[paramInt3 + 1] = paramArrayOfbyte3[i >>> 12 & 0x3F];
/* 224 */         paramArrayOfbyte2[paramInt3 + 2] = paramArrayOfbyte3[i >>> 6 & 0x3F];
/* 225 */         paramArrayOfbyte2[paramInt3 + 3] = 61;
/* 226 */         return paramArrayOfbyte2;
/*     */       case 1:
/* 228 */         paramArrayOfbyte2[paramInt3] = paramArrayOfbyte3[i >>> 18];
/* 229 */         paramArrayOfbyte2[paramInt3 + 1] = paramArrayOfbyte3[i >>> 12 & 0x3F];
/* 230 */         paramArrayOfbyte2[paramInt3 + 2] = 61;
/* 231 */         paramArrayOfbyte2[paramInt3 + 3] = 61;
/* 232 */         return paramArrayOfbyte2;
/*     */     } 
/* 234 */     return paramArrayOfbyte2;
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
/*     */   public static String encode(byte[] paramArrayOfbyte) {
/* 247 */     return encode(paramArrayOfbyte, 0, paramArrayOfbyte.length, ALPHABET, true);
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public static String encodeWebSafe(byte[] paramArrayOfbyte, boolean paramBoolean) {
/* 258 */     return encode(paramArrayOfbyte, 0, paramArrayOfbyte.length, WEBSAFE_ALPHABET, paramBoolean);
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
/*     */   public static String encode(byte[] paramArrayOfbyte1, int paramInt1, int paramInt2, byte[] paramArrayOfbyte2, boolean paramBoolean) {
/* 274 */     byte[] arrayOfByte = encode(paramArrayOfbyte1, paramInt1, paramInt2, paramArrayOfbyte2, 2147483647);
/* 275 */     int i = arrayOfByte.length;
/*     */ 
/*     */ 
/*     */     
/* 279 */     while (!paramBoolean && i > 0 && 
/* 280 */       arrayOfByte[i - 1] == 61)
/*     */     {
/*     */       
/* 283 */       i--;
/*     */     }
/*     */     
/* 286 */     return new String(arrayOfByte, 0, i);
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
/*     */   public static byte[] encode(byte[] paramArrayOfbyte1, int paramInt1, int paramInt2, byte[] paramArrayOfbyte2, int paramInt3) {
/* 301 */     int i = (paramInt2 + 2) / 3;
/* 302 */     int j = i * 4;
/* 303 */     byte[] arrayOfByte = new byte[j + j / paramInt3];
/*     */ 
/*     */     
/* 306 */     byte b1 = 0;
/* 307 */     byte b2 = 0;
/* 308 */     int k = paramInt2 - 2;
/* 309 */     int m = 0;
/* 310 */     for (; b1 < k; b1 += 3, b2 += 4) {
/*     */ 
/*     */ 
/*     */ 
/*     */       
/* 315 */       int n = paramArrayOfbyte1[b1 + paramInt1] << 24 >>> 8 | paramArrayOfbyte1[b1 + 1 + paramInt1] << 24 >>> 16 | paramArrayOfbyte1[b1 + 2 + paramInt1] << 24 >>> 24;
/*     */ 
/*     */ 
/*     */       
/* 319 */       arrayOfByte[b2] = paramArrayOfbyte2[n >>> 18];
/* 320 */       arrayOfByte[b2 + 1] = paramArrayOfbyte2[n >>> 12 & 0x3F];
/* 321 */       arrayOfByte[b2 + 2] = paramArrayOfbyte2[n >>> 6 & 0x3F];
/* 322 */       arrayOfByte[b2 + 3] = paramArrayOfbyte2[n & 0x3F];
/*     */       
/* 324 */       m += true;
/* 325 */       if (m == paramInt3) {
/* 326 */         arrayOfByte[b2 + 4] = 10;
/* 327 */         b2++;
/* 328 */         m = 0;
/*     */       } 
/*     */     } 
/*     */     
/* 332 */     if (b1 < paramInt2) {
/* 333 */       encode3to4(paramArrayOfbyte1, b1 + paramInt1, paramInt2 - b1, arrayOfByte, b2, paramArrayOfbyte2);
/*     */       
/* 335 */       m += 4;
/* 336 */       if (m == paramInt3) {
/*     */         
/* 338 */         arrayOfByte[b2 + 4] = 10;
/* 339 */         b2++;
/*     */       } 
/* 341 */       b2 += 4;
/*     */     } 
/*     */     
/* 344 */     assert b2 == arrayOfByte.length;
/* 345 */     return arrayOfByte;
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
/*     */   private static int decode4to3(byte[] paramArrayOfbyte1, int paramInt1, byte[] paramArrayOfbyte2, int paramInt2, byte[] paramArrayOfbyte3) {
/* 378 */     if (paramArrayOfbyte1[paramInt1 + 2] == 61) {
/* 379 */       int j = paramArrayOfbyte3[paramArrayOfbyte1[paramInt1]] << 24 >>> 6 | paramArrayOfbyte3[paramArrayOfbyte1[paramInt1 + 1]] << 24 >>> 12;
/*     */ 
/*     */ 
/*     */       
/* 383 */       paramArrayOfbyte2[paramInt2] = (byte)(j >>> 16);
/* 384 */       return 1;
/* 385 */     }  if (paramArrayOfbyte1[paramInt1 + 3] == 61) {
/*     */       
/* 387 */       int j = paramArrayOfbyte3[paramArrayOfbyte1[paramInt1]] << 24 >>> 6 | paramArrayOfbyte3[paramArrayOfbyte1[paramInt1 + 1]] << 24 >>> 12 | paramArrayOfbyte3[paramArrayOfbyte1[paramInt1 + 2]] << 24 >>> 18;
/*     */ 
/*     */ 
/*     */ 
/*     */       
/* 392 */       paramArrayOfbyte2[paramInt2] = (byte)(j >>> 16);
/* 393 */       paramArrayOfbyte2[paramInt2 + 1] = (byte)(j >>> 8);
/* 394 */       return 2;
/*     */     } 
/*     */     
/* 397 */     int i = paramArrayOfbyte3[paramArrayOfbyte1[paramInt1]] << 24 >>> 6 | paramArrayOfbyte3[paramArrayOfbyte1[paramInt1 + 1]] << 24 >>> 12 | paramArrayOfbyte3[paramArrayOfbyte1[paramInt1 + 2]] << 24 >>> 18 | paramArrayOfbyte3[paramArrayOfbyte1[paramInt1 + 3]] << 24 >>> 24;
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */     
/* 403 */     paramArrayOfbyte2[paramInt2] = (byte)(i >> 16);
/* 404 */     paramArrayOfbyte2[paramInt2 + 1] = (byte)(i >> 8);
/* 405 */     paramArrayOfbyte2[paramInt2 + 2] = (byte)i;
/* 406 */     return 3;
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
/*     */   public static byte[] decode(String paramString) throws Base64DecoderException {
/* 419 */     byte[] arrayOfByte = paramString.getBytes();
/* 420 */     return decode(arrayOfByte, 0, arrayOfByte.length);
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public static byte[] decodeWebSafe(String paramString) throws Base64DecoderException {
/* 431 */     byte[] arrayOfByte = paramString.getBytes();
/* 432 */     return decodeWebSafe(arrayOfByte, 0, arrayOfByte.length);
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
/*     */   public static byte[] decode(byte[] paramArrayOfbyte) throws Base64DecoderException {
/* 445 */     return decode(paramArrayOfbyte, 0, paramArrayOfbyte.length);
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
/*     */   public static byte[] decodeWebSafe(byte[] paramArrayOfbyte) throws Base64DecoderException {
/* 458 */     return decodeWebSafe(paramArrayOfbyte, 0, paramArrayOfbyte.length);
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
/*     */   public static byte[] decode(byte[] paramArrayOfbyte, int paramInt1, int paramInt2) throws Base64DecoderException {
/* 474 */     return decode(paramArrayOfbyte, paramInt1, paramInt2, DECODABET);
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
/*     */   public static byte[] decodeWebSafe(byte[] paramArrayOfbyte, int paramInt1, int paramInt2) throws Base64DecoderException {
/* 489 */     return decode(paramArrayOfbyte, paramInt1, paramInt2, WEBSAFE_DECODABET);
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
/*     */   public static byte[] decode(byte[] paramArrayOfbyte1, int paramInt1, int paramInt2, byte[] paramArrayOfbyte2) throws Base64DecoderException {
/* 504 */     int i = paramInt2 * 3 / 4;
/* 505 */     byte[] arrayOfByte1 = new byte[2 + i];
/* 506 */     int j = 0;
/*     */     
/* 508 */     byte[] arrayOfByte2 = new byte[4];
/* 509 */     byte b1 = 0;
/* 510 */     byte b2 = 0;
/* 511 */     byte b3 = 0;
/* 512 */     byte b4 = 0;
/* 513 */     for (b2 = 0; b2 < paramInt2; b2++) {
/* 514 */       b3 = (byte)(paramArrayOfbyte1[b2 + paramInt1] & Byte.MAX_VALUE);
/* 515 */       b4 = paramArrayOfbyte2[b3];
/*     */       
/* 517 */       if (b4 >= -5) {
/* 518 */         if (b4 >= -1) {
/*     */ 
/*     */           
/* 521 */           if (b3 == 61) {
/* 522 */             int k = paramInt2 - b2;
/* 523 */             byte b = (byte)(paramArrayOfbyte1[paramInt2 - 1 + paramInt1] & Byte.MAX_VALUE);
/* 524 */             if (!b1 || b1 == 1) {
/* 525 */               throw new Base64DecoderException("invalid padding byte '=' at byte offset " + b2);
/*     */             }
/* 527 */             if ((b1 == 3 && k > 2) || (b1 == 4 && k > 1))
/*     */             {
/* 529 */               throw new Base64DecoderException("padding byte '=' falsely signals end of encoded value at offset " + b2);
/*     */             }
/*     */             
/* 532 */             if (b != 61 && b != 10) {
/* 533 */               throw new Base64DecoderException("encoded value has invalid trailing byte");
/*     */             }
/*     */             
/*     */             break;
/*     */           } 
/*     */           
/* 539 */           arrayOfByte2[b1++] = b3;
/* 540 */           if (b1 == 4) {
/* 541 */             j += decode4to3(arrayOfByte2, 0, arrayOfByte1, j, paramArrayOfbyte2);
/* 542 */             b1 = 0;
/*     */           } 
/*     */         } 
/*     */       } else {
/* 546 */         throw new Base64DecoderException("Bad Base64 input character at " + b2 + ": " + paramArrayOfbyte1[b2 + paramInt1] + "(decimal)");
/*     */       } 
/*     */     } 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */     
/* 557 */     if (b1 != 0) {
/* 558 */       if (b1 == 1) {
/* 559 */         throw new Base64DecoderException("single trailing character at offset " + (paramInt2 - 1));
/*     */       }
/*     */       
/* 562 */       arrayOfByte2[b1++] = 61;
/* 563 */       j += decode4to3(arrayOfByte2, 0, arrayOfByte1, j, paramArrayOfbyte2);
/*     */     } 
/*     */     
/* 566 */     byte[] arrayOfByte3 = new byte[j];
/* 567 */     System.arraycopy(arrayOfByte1, 0, arrayOfByte3, 0, j);
/* 568 */     return arrayOfByte3;
/*     */   }
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/billing/google/Base64.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */