/*    */ package com.runrev.android;
/*    */ 
/*    */ import android.content.ContentProvider;
/*    */ import android.content.ContentValues;
/*    */ import android.database.Cursor;
/*    */ import android.net.Uri;
/*    */ import android.os.ParcelFileDescriptor;
/*    */ import android.util.Log;
/*    */ import java.io.FileNotFoundException;
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
/*    */ public class AppProvider
/*    */   extends ContentProvider
/*    */ {
/*    */   private FileProvider m_files;
/*    */   
/*    */   public boolean onCreate() {
/* 34 */     this.m_files = FileProvider.getProvider(getContext());
/* 35 */     return true;
/*    */   }
/*    */ 
/*    */ 
/*    */ 
/*    */   
/*    */   public ParcelFileDescriptor openFile(Uri paramUri, String paramString) throws FileNotFoundException {
/* 42 */     Log.i("revandroid", paramUri.toString());
/* 43 */     return this.m_files.doOpenFile(paramUri);
/*    */   }
/*    */ 
/*    */ 
/*    */   
/*    */   public Cursor query(Uri paramUri, String[] paramArrayOfString1, String paramString1, String[] paramArrayOfString2, String paramString2) {
/* 49 */     Log.i("revandroid", "query: " + paramUri.toString());
/* 50 */     return this.m_files.doQuery(paramUri, paramArrayOfString1, paramString1, paramArrayOfString2, paramString2);
/*    */   }
/*    */ 
/*    */ 
/*    */   
/*    */   public Uri insert(Uri paramUri, ContentValues paramContentValues) {
/* 56 */     return this.m_files.doInsert(paramUri, paramContentValues);
/*    */   }
/*    */ 
/*    */ 
/*    */   
/*    */   public int update(Uri paramUri, ContentValues paramContentValues, String paramString, String[] paramArrayOfString) {
/* 62 */     return this.m_files.doUpdate(paramUri, paramContentValues, paramString, paramArrayOfString);
/*    */   }
/*    */ 
/*    */ 
/*    */   
/*    */   public int delete(Uri paramUri, String paramString, String[] paramArrayOfString) {
/* 68 */     return this.m_files.doDelete(paramUri, paramString, paramArrayOfString);
/*    */   }
/*    */ 
/*    */ 
/*    */   
/*    */   public String getType(Uri paramUri) {
/* 74 */     return this.m_files.doGetType(paramUri);
/*    */   }
/*    */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/AppProvider.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */