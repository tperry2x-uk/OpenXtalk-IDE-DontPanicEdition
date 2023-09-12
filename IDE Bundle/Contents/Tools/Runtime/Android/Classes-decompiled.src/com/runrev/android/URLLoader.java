/*     */ package com.runrev.android;
/*     */ 
/*     */ import android.util.Base64;
/*     */ import android.util.Log;
/*     */ import java.io.IOException;
/*     */ import java.io.InputStream;
/*     */ import java.io.OutputStream;
/*     */ import java.net.HttpURLConnection;
/*     */ import java.net.MalformedURLException;
/*     */ import java.net.ProtocolException;
/*     */ import java.net.SocketTimeoutException;
/*     */ import java.net.URI;
/*     */ import java.net.URISyntaxException;
/*     */ import java.net.URL;
/*     */ import java.net.URLConnection;
/*     */ import java.security.KeyManagementException;
/*     */ import java.security.NoSuchAlgorithmException;
/*     */ import java.security.cert.X509Certificate;
/*     */ import javax.net.ssl.HostnameVerifier;
/*     */ import javax.net.ssl.HttpsURLConnection;
/*     */ import javax.net.ssl.SSLContext;
/*     */ import javax.net.ssl.SSLSession;
/*     */ import javax.net.ssl.TrustManager;
/*     */ import javax.net.ssl.X509TrustManager;
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ abstract class URLLoader
/*     */   implements Runnable
/*     */ {
/*     */   private URL m_url;
/*     */   private URLConnection m_connection;
/*     */   private int m_id;
/*     */   boolean m_is_http;
/*     */   private byte[] m_upload_data;
/*     */   private byte[] m_bytes;
/*     */   private int m_byte_count;
/*     */   private static final int BUFFER_SIZE = 65536;
/*     */   private byte[] m_buffer;
/*     */   private int m_buffer_frontier;
/*     */   private String m_err_string;
/*     */   private int m_content_length;
/*     */   
/*     */   public URLLoader(int paramInt, String paramString) throws URISyntaxException, MalformedURLException, IOException {
/*  51 */     Log.i("revandroid", "URLLoader " + paramString);
/*  52 */     this.m_id = paramInt;
/*     */     
/*  54 */     URI uRI = new URI(paramString);
/*     */     
/*  56 */     this.m_url = uRI.toURL();
/*     */     
/*  58 */     this.m_connection = this.m_url.openConnection();
/*     */     
/*  60 */     this.m_is_http = (this.m_url.getProtocol().equals("http") || this.m_url.getProtocol().equals("https"));
/*     */     
/*  62 */     if (this.m_is_http) {
/*     */       
/*  64 */       HttpURLConnection httpURLConnection = (HttpURLConnection)this.m_connection;
/*  65 */       HttpURLConnection.setFollowRedirects(true);
/*     */     } 
/*     */ 
/*     */     
/*  69 */     if (this.m_is_http) {
/*     */       
/*  71 */       String str = this.m_url.getUserInfo();
/*  72 */       if (str != null) {
/*  73 */         this.m_connection.setRequestProperty("Authorization", "Basic " + Base64.encodeToString(str.getBytes(), 0));
/*     */       }
/*     */     } 
/*     */   }
/*     */   
/*     */   public void setTimeout(int paramInt) {
/*  79 */     this.m_connection.setConnectTimeout(paramInt);
/*  80 */     this.m_connection.setReadTimeout(paramInt);
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public void setSSLVerification(boolean paramBoolean) {
/*  87 */     if (!this.m_is_http) {
/*     */       return;
/*     */     }
/*     */     
/*  91 */     if (!(this.m_connection instanceof HttpsURLConnection)) {
/*     */       return;
/*     */     }
/*     */     
/*  95 */     if (paramBoolean) {
/*     */       return;
/*     */     }
/*     */ 
/*     */ 
/*     */     
/*     */     try {
/* 102 */       SSLContext sSLContext = SSLContext.getInstance("TLS");
/* 103 */       sSLContext.init(null, (TrustManager[])new X509TrustManager[] { new X509TrustManager()
/*     */             {
/*     */               public X509Certificate[] getAcceptedIssuers() {
/* 106 */                 return null;
/*     */               }
/*     */               public void checkClientTrusted(X509Certificate[] param1ArrayOfX509Certificate, String param1String) {}
/*     */               public void checkServerTrusted(X509Certificate[] param1ArrayOfX509Certificate, String param1String) {}
/*     */             },   }, null);
/* 111 */       ((HttpsURLConnection)this.m_connection).setSSLSocketFactory(sSLContext.getSocketFactory());
/*     */     }
/* 113 */     catch (NoSuchAlgorithmException noSuchAlgorithmException) {
/*     */ 
/*     */     
/* 116 */     } catch (KeyManagementException keyManagementException) {}
/*     */ 
/*     */ 
/*     */ 
/*     */     
/* 121 */     ((HttpsURLConnection)this.m_connection).setHostnameVerifier(new HostnameVerifier()
/*     */         {
/*     */           public boolean verify(String param1String, SSLSession param1SSLSession) {
/* 124 */             return true;
/*     */           }
/*     */         });
/*     */   }
/*     */ 
/*     */   
/*     */   public void setMethod(String paramString) {
/* 131 */     if (paramString.equals("POST")) {
/*     */       
/* 133 */       this.m_connection.setDoInput(true);
/* 134 */       this.m_connection.setDoOutput(true);
/*     */     }
/* 136 */     else if (paramString.equals("PUT")) {
/*     */       
/* 138 */       this.m_connection.setDoInput(false);
/* 139 */       this.m_connection.setDoOutput(true);
/*     */     } 
/* 141 */     if (this.m_is_http) {
/*     */       
/*     */       try {
/*     */         
/* 145 */         ((HttpURLConnection)this.m_connection).setRequestMethod(paramString);
/*     */       }
/* 147 */       catch (ProtocolException protocolException) {
/*     */         return;
/*     */       } 
/*     */     }
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public void setHeaders(String paramString) {
/* 156 */     if (this.m_is_http)
/*     */     {
/* 158 */       if (paramString != null && paramString.length() > 0)
/*     */       {
/* 160 */         for (String str : paramString.split("\n")) {
/*     */           
/* 162 */           int i = str.indexOf(':');
/* 163 */           if (i != -1) {
/*     */             
/* 165 */             String str1 = str.substring(0, i).trim();
/* 166 */             String str2 = str.substring(i + 1).trim();
/* 167 */             this.m_connection.setRequestProperty(str1, str2);
/*     */           } 
/*     */         } 
/*     */       }
/*     */     }
/*     */   }
/*     */ 
/*     */   
/*     */   public void setUploadData(byte[] paramArrayOfbyte) {
/* 176 */     if (paramArrayOfbyte != null && paramArrayOfbyte.length > 0)
/*     */     {
/* 178 */       this.m_upload_data = paramArrayOfbyte;
/*     */     }
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public void run() {
/* 185 */     this.m_buffer = new byte[65536];
/* 186 */     this.m_buffer_frontier = 0;
/*     */ 
/*     */ 
/*     */     
/*     */     try {
/* 191 */       if (this.m_upload_data != null && this.m_is_http) {
/* 192 */         ((HttpURLConnection)this.m_connection).setFixedLengthStreamingMode(this.m_upload_data.length);
/*     */       }
/* 194 */       this.m_connection.connect();
/*     */       
/* 196 */       onURLStart();
/*     */       
/* 198 */       if (this.m_upload_data != null) {
/*     */         
/* 200 */         int j = 0;
/* 201 */         OutputStream outputStream = this.m_connection.getOutputStream();
/* 202 */         while (j < this.m_upload_data.length) {
/*     */           
/* 204 */           int k = Math.min(131072, this.m_upload_data.length - j);
/* 205 */           outputStream.write(this.m_upload_data, j, k);
/* 206 */           j += k;
/* 207 */           onURLUploadData(j);
/*     */         } 
/*     */       } 
/*     */       
/* 211 */       boolean bool = false;
/* 212 */       int i = 0;
/*     */ 
/*     */       
/* 215 */       if (this.m_is_http) {
/*     */         
/* 217 */         i = ((HttpURLConnection)this.m_connection).getResponseCode();
/* 218 */         if (i >= 400) {
/*     */           
/* 220 */           bool = true;
/* 221 */           this.m_err_string = String.valueOf(i) + " " + ((HttpURLConnection)this.m_connection).getResponseMessage();
/*     */         } 
/*     */       } 
/*     */       
/* 225 */       if (this.m_connection.getDoInput()) {
/*     */         InputStream inputStream;
/* 227 */         this.m_content_length = this.m_connection.getContentLength();
/*     */ 
/*     */         
/* 230 */         onURLConnect();
/*     */ 
/*     */         
/* 233 */         if (bool) {
/* 234 */           inputStream = ((HttpURLConnection)this.m_connection).getErrorStream();
/*     */         } else {
/* 236 */           inputStream = this.m_connection.getInputStream();
/*     */         } 
/*     */ 
/*     */ 
/*     */         
/* 241 */         int j = 0;
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */         
/*     */         while (true) {
/* 249 */           int k = inputStream.read(this.m_buffer, j, 65536 - j);
/* 250 */           if (k == -1) {
/*     */             break;
/*     */           }
/*     */ 
/*     */           
/* 255 */           synchronized (this) {
/*     */             
/* 257 */             if (this.m_buffer_frontier != 0) {
/*     */ 
/*     */ 
/*     */               
/* 261 */               this.m_buffer_frontier += k;
/*     */             
/*     */             }
/*     */             else {
/*     */ 
/*     */               
/* 267 */               System.arraycopy(this.m_buffer, j, this.m_buffer, 0, k);
/* 268 */               this.m_buffer_frontier = k;
/* 269 */               onURLReceiveData();
/*     */             } 
/*     */ 
/*     */             
/* 273 */             if (this.m_buffer_frontier == 65536) {
/* 274 */               wait();
/*     */             }
/*     */             
/* 277 */             j = this.m_buffer_frontier;
/*     */           } 
/*     */         } 
/*     */         
/* 281 */         inputStream.close();
/*     */ 
/*     */         
/* 284 */         if (bool) {
/* 285 */           onURLError();
/*     */         } else {
/* 287 */           onURLComplete();
/*     */         } 
/*     */       } 
/* 290 */     } catch (SocketTimeoutException socketTimeoutException) {
/*     */       
/* 292 */       this.m_err_string = "timeout";
/* 293 */       onURLError();
/*     */     }
/* 295 */     catch (IOException iOException) {
/*     */       
/* 297 */       this.m_err_string = iOException.toString();
/* 298 */       onURLError();
/*     */     }
/* 300 */     catch (Exception exception) {}
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public synchronized byte[] popBytes() {
/* 310 */     byte[] arrayOfByte = new byte[this.m_buffer_frontier];
/* 311 */     System.arraycopy(this.m_buffer, 0, arrayOfByte, 0, this.m_buffer_frontier);
/*     */ 
/*     */     
/* 314 */     if (this.m_buffer_frontier == 65536) {
/* 315 */       notify();
/*     */     }
/*     */     
/* 318 */     this.m_buffer_frontier = 0;
/*     */ 
/*     */     
/* 321 */     return arrayOfByte;
/*     */   }
/*     */   
/* 324 */   public int getID() { return this.m_id; }
/* 325 */   public int getContentLength() { return this.m_content_length; }
/* 326 */   public byte[] getBytes() { return this.m_bytes; }
/* 327 */   public int getByteCount() { return this.m_byte_count; } public String getErrorString() {
/* 328 */     return this.m_err_string;
/*     */   }
/*     */   
/*     */   public abstract void onURLStart();
/*     */   
/*     */   public abstract void onURLConnect();
/*     */   
/*     */   public abstract void onURLUploadData(int paramInt);
/*     */   
/*     */   public abstract void onURLReceiveData();
/*     */   
/*     */   public abstract void onURLComplete();
/*     */   
/*     */   public abstract void onURLError();
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/URLLoader.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */