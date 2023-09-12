/*     */ package com.runrev.android;
/*     */ 
/*     */ import android.content.Context;
/*     */ import android.content.Intent;
/*     */ import android.net.Uri;
/*     */ import android.text.Html;
/*     */ import android.text.Spanned;
/*     */ import android.text.SpannedString;
/*     */ import java.io.File;
/*     */ import java.io.FileOutputStream;
/*     */ import java.util.ArrayList;
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ class Email
/*     */ {
/*     */   private String[] m_email;
/*     */   private String[] m_cc;
/*     */   private String[] m_bcc;
/*     */   private String m_subject;
/*     */   private Spanned m_message;
/*     */   private ArrayList<Uri> m_attachment_uris;
/*     */   private String m_mime_type;
/*     */   
/*     */   public Email(String paramString1, String paramString2, String paramString3, String paramString4, String paramString5, boolean paramBoolean) {
/*  41 */     if (paramString1 != null && paramString1.length() > 0)
/*  42 */       this.m_email = paramString1.trim().split(" *, *"); 
/*  43 */     if (paramString2 != null && paramString2.length() > 0)
/*  44 */       this.m_cc = paramString2.trim().split(" *, *"); 
/*  45 */     if (paramString3 != null && paramString3.length() > 0)
/*  46 */       this.m_bcc = paramString3.trim().split(" *, *"); 
/*  47 */     if (paramString4 != null && paramString4.length() > 0) {
/*  48 */       this.m_subject = paramString4;
/*     */     }
/*  50 */     if (paramString5 != null && paramString5.length() > 0)
/*     */     {
/*  52 */       if (paramBoolean) {
/*     */         
/*  54 */         this.m_message = Html.fromHtml(paramString5);
/*  55 */         this.m_mime_type = "text/html";
/*     */       }
/*     */       else {
/*     */         
/*  59 */         this.m_message = (Spanned)new SpannedString(paramString5);
/*  60 */         this.m_mime_type = "text/plain";
/*     */       } 
/*     */     }
/*     */   }
/*     */ 
/*     */   
/*     */   private static String getMimeCategory(String paramString) {
/*  67 */     if (paramString == null) {
/*  68 */       return "*/*";
/*     */     }
/*  70 */     return paramString.substring(0, paramString.lastIndexOf('/'));
/*     */   }
/*     */ 
/*     */   
/*     */   private String combineMimeTypes(String paramString1, String paramString2) {
/*  75 */     if (paramString1 == null)
/*  76 */       return paramString2; 
/*  77 */     if (paramString2 == null)
/*  78 */       return paramString1; 
/*  79 */     if (paramString1.equals(paramString2)) {
/*  80 */       return paramString1;
/*     */     }
/*  82 */     String str1 = getMimeCategory(paramString1);
/*  83 */     String str2 = getMimeCategory(paramString2);
/*     */     
/*  85 */     if (str1.equals(str2)) {
/*  86 */       return str1 + "/*";
/*     */     }
/*     */     
/*  89 */     return "*/*";
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   private boolean addAttachment(Uri paramUri, String paramString1, String paramString2) {
/*  95 */     if (this.m_attachment_uris == null) {
/*  96 */       this.m_attachment_uris = new ArrayList<>();
/*     */     }
/*  98 */     this.m_attachment_uris.add(paramUri);
/*     */     
/* 100 */     this.m_mime_type = combineMimeTypes(this.m_mime_type, paramString1);
/* 101 */     return true;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean addAttachment(Context paramContext, String paramString1, String paramString2, String paramString3) {
/* 107 */     File file = new File(paramString1);
/*     */ 
/*     */     
/* 110 */     Uri uri = FileProvider.getProvider(paramContext).addPath(paramString3, paramString1, paramString2, false, 268435456);
/*     */     
/* 112 */     return addAttachment(uri, paramString2, paramString3);
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean addAttachment(Context paramContext, byte[] paramArrayOfbyte, String paramString1, String paramString2) {
/*     */     try {
/* 121 */       File file = File.createTempFile("eml", paramString2, paramContext.getCacheDir());
/*     */       
/* 123 */       FileOutputStream fileOutputStream = new FileOutputStream(file);
/* 124 */       fileOutputStream.write(paramArrayOfbyte);
/* 125 */       fileOutputStream.close();
/*     */ 
/*     */       
/* 128 */       Uri uri = FileProvider.getProvider(paramContext).addPath(paramString2, file.getPath(), paramString1, true, 268435456);
/*     */       
/* 130 */       return addAttachment(uri, paramString1, paramString2);
/*     */     }
/* 132 */     catch (Exception exception) {
/*     */ 
/*     */       
/* 135 */       return false;
/*     */     } 
/*     */   }
/*     */ 
/*     */   
/*     */   public Intent createIntent() {
/* 141 */     Intent intent = new Intent("android.intent.action.SEND_MULTIPLE");
/* 142 */     if (this.m_email != null)
/*     */     {
/* 144 */       intent.putExtra("android.intent.extra.EMAIL", this.m_email);
/*     */     }
/* 146 */     if (this.m_cc != null)
/*     */     {
/* 148 */       intent.putExtra("android.intent.extra.CC", this.m_cc);
/*     */     }
/* 150 */     if (this.m_bcc != null)
/*     */     {
/* 152 */       intent.putExtra("android.intent.extra.BCC", this.m_bcc);
/*     */     }
/* 154 */     if (this.m_subject != null)
/*     */     {
/* 156 */       intent.putExtra("android.intent.extra.SUBJECT", this.m_subject);
/*     */     }
/*     */     
/* 159 */     if (this.m_message != null)
/*     */     {
/* 161 */       intent.putExtra("android.intent.extra.TEXT", (CharSequence)this.m_message);
/*     */     }
/*     */     
/* 164 */     if (this.m_attachment_uris != null)
/*     */     {
/* 166 */       intent.putParcelableArrayListExtra("android.intent.extra.STREAM", this.m_attachment_uris);
/*     */     }
/* 168 */     if (this.m_mime_type != null) {
/* 169 */       intent.setType(this.m_mime_type);
/*     */     } else {
/* 171 */       intent.setType("text/plain");
/*     */     } 
/*     */ 
/*     */     
/* 175 */     intent.addFlags(1);
/*     */     
/* 177 */     return intent;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public void cleanupAttachments(Context paramContext) {
/*     */     try {
/* 184 */       for (Uri uri : this.m_attachment_uris) {
/* 185 */         FileProvider.getProvider(paramContext).removePath(uri.getPath());
/*     */       }
/* 187 */     } catch (Exception exception) {}
/*     */   }
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/Email.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */