/*     */ package com.runrev.android;
/*     */ 
/*     */ import android.content.ContentValues;
/*     */ import android.content.Context;
/*     */ import android.content.res.AssetFileDescriptor;
/*     */ import android.database.Cursor;
/*     */ import android.database.MatrixCursor;
/*     */ import android.net.Uri;
/*     */ import android.os.ParcelFileDescriptor;
/*     */ import android.util.Log;
/*     */ import java.io.File;
/*     */ import java.io.FileInputStream;
/*     */ import java.io.FileNotFoundException;
/*     */ import java.io.FileOutputStream;
/*     */ import java.io.IOException;
/*     */ import java.util.HashMap;
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ public class FileProvider
/*     */ {
/*     */   public static final String NAME = "_display_name";
/*     */   public static final String MIME_TYPE = "_mime_type";
/*     */   public static final String SIZE = "_size";
/*     */   public static final String TEMPORARY = "_tmp";
/*     */   public static final String FILE = "_file";
/*     */   private static final String PRIVATE_FILEMODE = "_private_filemode";
/*  46 */   private static final String[] COLS = new String[] { "_display_name", "_mime_type", "_size", "_tmp", "_file" };
/*     */   
/*  48 */   private HashMap<String, HashMap<String, String>> m_infos = null;
/*     */   
/*     */   private Context m_context;
/*     */   private String m_content_uri_base;
/*     */   
/*     */   private FileProvider(Context paramContext) {
/*  54 */     this.m_infos = new HashMap<>();
/*  55 */     this.m_context = paramContext;
/*  56 */     this.m_content_uri_base = "content://" + paramContext.getPackageName() + ".fileprovider/share";
/*     */   }
/*     */   
/*  59 */   private static FileProvider s_provider = null;
/*     */   
/*     */   public static FileProvider getProvider(Context paramContext) {
/*  62 */     if (s_provider == null)
/*  63 */       s_provider = new FileProvider(paramContext); 
/*  64 */     return s_provider;
/*     */   }
/*     */ 
/*     */   
/*     */   private boolean isAPK(String paramString) {
/*  69 */     return paramString.startsWith(this.m_context.getPackageCodePath());
/*     */   }
/*     */ 
/*     */   
/*     */   private String getAPKPath(String paramString) {
/*  74 */     int i = this.m_context.getPackageCodePath().length();
/*  75 */     if (paramString.charAt(i) == '/')
/*  76 */       i++; 
/*  77 */     return paramString.substring(i);
/*     */   }
/*     */ 
/*     */   
/*     */   private String getFilePath(String paramString) {
/*  82 */     if (isAPK(paramString)) {
/*  83 */       return getAPKPath(paramString);
/*     */     }
/*  85 */     return paramString;
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
/*     */   private String getUriStringForFilePath(String paramString) {
/* 100 */     if (paramString.charAt(0) == '/')
/* 101 */       paramString = paramString.substring(1); 
/* 102 */     return this.m_content_uri_base + "/" + paramString;
/*     */   }
/*     */ 
/*     */   
/*     */   private boolean validField(String paramString) {
/* 107 */     for (String str : COLS) {
/* 108 */       if (str.equals(paramString))
/* 109 */         return true; 
/* 110 */     }  return false;
/*     */   }
/*     */ 
/*     */   
/*     */   private boolean validQuery(String[] paramArrayOfString) {
/* 115 */     boolean bool = true;
/* 116 */     for (byte b = 0; b < paramArrayOfString.length && bool; b++) {
/*     */       
/* 118 */       if (!validField(paramArrayOfString[b])) {
/*     */ 
/*     */         
/* 121 */         Log.i("revandroid", "incorrect projection: " + paramArrayOfString[b]);
/* 122 */         bool = false;
/*     */       } 
/*     */     } 
/* 125 */     return bool;
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public ParcelFileDescriptor doOpenFile(Uri paramUri) throws FileNotFoundException {
/* 133 */     String str = paramUri.toString();
/*     */ 
/*     */ 
/*     */     
/*     */     try {
/* 138 */       if (!this.m_infos.containsKey(str)) {
/* 139 */         throw new IOException();
/*     */       }
/*     */       
/* 142 */       this; String str1 = (String)((HashMap)this.m_infos.get(str)).get("_file");
/*     */ 
/*     */       
/* 145 */       this; int i = Integer.valueOf((String)((HashMap)this.m_infos.get(str)).get("_private_filemode")).intValue();
/*     */       
/* 147 */       File file = new File(str1);
/* 148 */       return ParcelFileDescriptor.open(file, i);
/*     */ 
/*     */     
/*     */     }
/* 152 */     catch (IOException iOException) {
/*     */       
/* 154 */       Log.i("revandroid", "Failed to open content file: " + iOException.getMessage());
/* 155 */       throw new FileNotFoundException("unable to find file " + str);
/*     */     } 
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public Cursor doQuery(Uri paramUri, String[] paramArrayOfString1, String paramString1, String[] paramArrayOfString2, String paramString2) {
/* 164 */     if (!validQuery(paramArrayOfString1)) {
/*     */       
/* 166 */       Log.i("revandroid", "Unexpected projection:");
/* 167 */       for (byte b1 = 0; b1 < paramArrayOfString1.length; b1++) {
/* 168 */         Log.i("revandroid", String.format("\t\tprojection[%d]: %s", new Object[] { Integer.valueOf(b1), paramArrayOfString1[b1] }));
/*     */       } 
/* 170 */       return null;
/*     */     } 
/*     */     
/* 173 */     String str = paramUri.toString();
/* 174 */     HashMap hashMap = this.m_infos.get(str);
/*     */     
/* 176 */     String[] arrayOfString = new String[paramArrayOfString1.length];
/* 177 */     for (byte b = 0; b < paramArrayOfString1.length; b++) {
/* 178 */       arrayOfString[b] = (String)hashMap.get(paramArrayOfString1[b]);
/*     */     }
/*     */ 
/*     */ 
/*     */     
/* 183 */     MatrixCursor matrixCursor = new MatrixCursor(paramArrayOfString1);
/* 184 */     matrixCursor.addRow((Object[])arrayOfString);
/*     */     
/* 186 */     return (Cursor)matrixCursor;
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public Uri addPath(String paramString1, String paramString2, String paramString3, boolean paramBoolean, int paramInt) {
/*     */     try {
/*     */       String str;
/*     */       Long long_;
/* 196 */       if (isAPK(paramString2)) {
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */         
/* 203 */         AssetFileDescriptor assetFileDescriptor = this.m_context.getAssets().openFd(getAPKPath(paramString2));
/* 204 */         long_ = Long.valueOf(assetFileDescriptor.getLength());
/*     */         
/* 206 */         FileInputStream fileInputStream = assetFileDescriptor.createInputStream();
/* 207 */         byte[] arrayOfByte = new byte[long_.intValue()];
/*     */         
/* 209 */         fileInputStream.read(arrayOfByte, 0, long_.intValue());
/*     */ 
/*     */ 
/*     */         
/* 213 */         File file = File.createTempFile("eml", paramString1, this.m_context.getCacheDir());
/*     */         
/* 215 */         FileOutputStream fileOutputStream = new FileOutputStream(file);
/* 216 */         fileOutputStream.write(arrayOfByte);
/* 217 */         fileOutputStream.close();
/*     */         
/* 219 */         str = file.getPath();
/* 220 */         assetFileDescriptor.close();
/*     */ 
/*     */         
/* 223 */         paramBoolean = true;
/*     */       }
/*     */       else {
/*     */         
/* 227 */         File file = new File(paramString2);
/* 228 */         long_ = Long.valueOf(file.length());
/* 229 */         str = paramString2;
/*     */       } 
/*     */       
/* 232 */       HashMap<Object, Object> hashMap = new HashMap<>();
/*     */       
/* 234 */       this; hashMap.put("_display_name", paramString1);
/* 235 */       this; hashMap.put("_size", Long.toString(long_.longValue()));
/* 236 */       this; hashMap.put("_mime_type", paramString3);
/* 237 */       this; hashMap.put("_tmp", Boolean.toString(paramBoolean));
/* 238 */       this; hashMap.put("_file", str);
/* 239 */       this; hashMap.put("_private_filemode", Integer.toString(paramInt));
/*     */       
/* 241 */       this.m_infos.put(getUriStringForFilePath(paramString2), hashMap);
/*     */     }
/* 243 */     catch (FileNotFoundException fileNotFoundException) {
/*     */       
/* 245 */       Log.d("revandroid", String.format("File not found (%s)", new Object[] { fileNotFoundException.getMessage() }));
/* 246 */       return null;
/*     */     }
/* 248 */     catch (IOException iOException) {
/*     */       
/* 250 */       Log.d("revandroid", String.format("IOException (&s)", new Object[] { iOException.getMessage() }));
/* 251 */       return null;
/*     */     } 
/*     */     
/* 254 */     return Uri.parse(getUriStringForFilePath(paramString2));
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public void removePath(String paramString) {
/* 260 */     String str = getUriStringForFilePath(paramString);
/* 261 */     if (!this.m_infos.containsKey(str)) {
/*     */       return;
/*     */     }
/* 264 */     HashMap hashMap = this.m_infos.get(str);
/* 265 */     this.m_infos.remove(str);
/*     */     
/* 267 */     this; boolean bool = Boolean.valueOf((String)hashMap.get("_tmp")).booleanValue();
/*     */     
/* 269 */     if (bool) {
/*     */ 
/*     */       
/* 272 */       this; File file = new File((String)hashMap.get("_file"));
/* 273 */       file.delete();
/*     */     } 
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public Uri doInsert(Uri paramUri, ContentValues paramContentValues) {
/* 280 */     throw new UnsupportedOperationException("No external inserts");
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public int doUpdate(Uri paramUri, ContentValues paramContentValues, String paramString, String[] paramArrayOfString) {
/* 286 */     throw new UnsupportedOperationException("No external updates");
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public int doDelete(Uri paramUri, String paramString, String[] paramArrayOfString) {
/* 292 */     throw new UnsupportedOperationException("No external deletions");
/*     */   }
/*     */ 
/*     */   
/*     */   public String doGetType(Uri paramUri) {
/* 297 */     String str = paramUri.toString();
/*     */     
/* 299 */     if (this.m_infos.containsKey(str)) {
/* 300 */       this; return (String)((HashMap)this.m_infos.get(str)).get("_mime_type");
/*     */     } 
/* 302 */     return null;
/*     */   }
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/FileProvider.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */