/*     */ package com.runrev.android;
/*     */ 
/*     */ import java.io.IOException;
/*     */ import java.net.InetAddress;
/*     */ import java.net.MalformedURLException;
/*     */ import java.net.NetworkInterface;
/*     */ import java.net.SocketException;
/*     */ import java.net.URISyntaxException;
/*     */ import java.util.Enumeration;
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ public class NetworkModule
/*     */ {
/*     */   protected Engine m_engine;
/*     */   protected int m_url_timeout;
/*     */   protected boolean m_url_ssl_verify;
/*     */   
/*     */   public NetworkModule(Engine paramEngine) {
/*  34 */     this.m_engine = paramEngine;
/*     */     
/*  36 */     this.m_url_timeout = 10000;
/*     */     
/*  38 */     this.m_url_ssl_verify = true;
/*     */   }
/*     */ 
/*     */   
/*     */   public void setURLTimeout(int paramInt) {
/*  43 */     this.m_url_timeout = paramInt * 1000;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public void setURLSSLVerification(boolean paramBoolean) {
/*  49 */     this.m_url_ssl_verify = paramBoolean;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean loadURL(int paramInt, String paramString1, String paramString2) {
/*     */     try {
/*  56 */       URLLoader uRLLoader = createURLLoader(paramInt, paramString1);
/*  57 */       uRLLoader.setHeaders(paramString2);
/*  58 */       uRLLoader.setTimeout(this.m_url_timeout);
/*     */       
/*  60 */       uRLLoader.setSSLVerification(this.m_url_ssl_verify);
/*     */       
/*  62 */       (new Thread(uRLLoader)).start();
/*     */     }
/*  64 */     catch (MalformedURLException malformedURLException) {
/*     */       
/*  66 */       return false;
/*     */     }
/*  68 */     catch (URISyntaxException uRISyntaxException) {
/*     */       
/*  70 */       return false;
/*     */     }
/*  72 */     catch (IOException iOException) {
/*     */       
/*  74 */       return false;
/*     */     } 
/*     */     
/*  77 */     return true;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean postURL(int paramInt, String paramString1, String paramString2, byte[] paramArrayOfbyte) {
/*     */     try {
/*  84 */       URLLoader uRLLoader = createURLLoader(paramInt, paramString1);
/*  85 */       uRLLoader.setHeaders("Content-Type: application/x-www-form-urlencoded");
/*  86 */       uRLLoader.setHeaders(paramString2);
/*  87 */       uRLLoader.setMethod("POST");
/*  88 */       uRLLoader.setUploadData(paramArrayOfbyte);
/*  89 */       uRLLoader.setTimeout(this.m_url_timeout);
/*     */       
/*  91 */       uRLLoader.setSSLVerification(this.m_url_ssl_verify);
/*     */       
/*  93 */       (new Thread(uRLLoader)).start();
/*     */     }
/*  95 */     catch (MalformedURLException malformedURLException) {
/*     */       
/*  97 */       return false;
/*     */     }
/*  99 */     catch (URISyntaxException uRISyntaxException) {
/*     */       
/* 101 */       return false;
/*     */     }
/* 103 */     catch (IOException iOException) {
/*     */       
/* 105 */       return false;
/*     */     } 
/*     */     
/* 108 */     return true;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean putURL(int paramInt, String paramString1, String paramString2, byte[] paramArrayOfbyte) {
/*     */     try {
/* 115 */       URLLoader uRLLoader = createURLLoader(paramInt, paramString1);
/* 116 */       uRLLoader.setHeaders(paramString2);
/* 117 */       uRLLoader.setMethod("PUT");
/* 118 */       uRLLoader.setUploadData(paramArrayOfbyte);
/* 119 */       uRLLoader.setTimeout(this.m_url_timeout);
/*     */       
/* 121 */       uRLLoader.setSSLVerification(this.m_url_ssl_verify);
/*     */       
/* 123 */       (new Thread(uRLLoader)).start();
/*     */     }
/* 125 */     catch (MalformedURLException malformedURLException) {
/*     */       
/* 127 */       return false;
/*     */     }
/* 129 */     catch (URISyntaxException uRISyntaxException) {
/*     */       
/* 131 */       return false;
/*     */     }
/* 133 */     catch (IOException iOException) {
/*     */       
/* 135 */       return false;
/*     */     } 
/*     */     
/* 138 */     return true;
/*     */   }
/*     */ 
/*     */   
/*     */   protected URLLoader createURLLoader(int paramInt, String paramString) throws URISyntaxException, MalformedURLException, IOException {
/* 143 */     return new URLLoader(paramInt, paramString)
/*     */       {
/*     */         public void onURLStart()
/*     */         {
/* 147 */           final int t_id = getID();
/* 148 */           NetworkModule.this.m_engine.post(new Runnable() {
/*     */                 public void run() {
/* 150 */                   NetworkModule.this.m_engine.onUrlDidStart(t_id);
/*     */                 }
/*     */               });
/*     */         }
/*     */ 
/*     */         
/*     */         public void onURLConnect() {
/* 157 */           final int t_id = getID();
/* 158 */           final int t_content_length = getContentLength();
/* 159 */           NetworkModule.this.m_engine.post(new Runnable() {
/*     */                 public void run() {
/* 161 */                   NetworkModule.this.m_engine.onUrlDidConnect(t_id, t_content_length);
/*     */                 }
/*     */               });
/*     */         }
/*     */ 
/*     */         
/*     */         public void onURLUploadData(int param1Int) {
/* 168 */           null  = this;
/* 169 */           final int t_id = getID();
/* 170 */           final int t_sent = param1Int;
/* 171 */           NetworkModule.this.m_engine.post(new Runnable() {
/*     */                 public void run() {
/* 173 */                   NetworkModule.this.m_engine.onUrlDidSendData(t_id, t_sent);
/*     */                 }
/*     */               });
/*     */         }
/*     */         
/*     */         public void onURLReceiveData() {
/* 179 */           final null t_loader = this;
/* 180 */           final int t_id = getID();
/* 181 */           NetworkModule.this.m_engine.post(new Runnable()
/*     */               {
/*     */                 public void run() {
/* 184 */                   byte[] arrayOfByte = t_loader.popBytes();
/* 185 */                   NetworkModule.this.m_engine.onUrlDidReceiveData(t_id, arrayOfByte, arrayOfByte.length);
/*     */                 }
/*     */               });
/*     */         }
/*     */ 
/*     */ 
/*     */         
/*     */         public void onURLComplete() {
/* 193 */           final int t_id = getID();
/* 194 */           NetworkModule.this.m_engine.post(new Runnable() {
/*     */                 public void run() {
/* 196 */                   NetworkModule.this.m_engine.onUrlDidFinish(t_id);
/*     */                 }
/*     */               });
/*     */         }
/*     */ 
/*     */ 
/*     */         
/*     */         public void onURLError() {
/* 204 */           final int t_id = getID();
/* 205 */           final String t_err_msg = getErrorString();
/* 206 */           NetworkModule.this.m_engine.post(new Runnable() {
/*     */                 public void run() {
/* 208 */                   NetworkModule.this.m_engine.onUrlError(t_id, t_err_msg);
/*     */                 }
/*     */               });
/*     */         }
/*     */       };
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public String getNetworkInterfaces() {
/* 218 */     StringBuffer stringBuffer = new StringBuffer();
/*     */ 
/*     */     
/*     */     try {
/* 222 */       Enumeration<NetworkInterface> enumeration = NetworkInterface.getNetworkInterfaces();
/* 223 */       while (enumeration.hasMoreElements()) {
/*     */         
/* 225 */         NetworkInterface networkInterface = enumeration.nextElement();
/* 226 */         Enumeration<InetAddress> enumeration1 = networkInterface.getInetAddresses();
/* 227 */         while (enumeration1.hasMoreElements()) {
/*     */           
/* 229 */           InetAddress inetAddress = enumeration1.nextElement();
/* 230 */           if (inetAddress instanceof java.net.Inet4Address)
/*     */           {
/* 232 */             if (stringBuffer.length() > 0)
/* 233 */               stringBuffer.append("\n"); 
/* 234 */             stringBuffer.append(inetAddress.getHostAddress());
/*     */           }
/*     */         
/*     */         } 
/*     */       } 
/* 239 */     } catch (SocketException socketException) {
/*     */       
/* 241 */       return null;
/*     */     } 
/*     */     
/* 244 */     return stringBuffer.toString();
/*     */   }
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/NetworkModule.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */