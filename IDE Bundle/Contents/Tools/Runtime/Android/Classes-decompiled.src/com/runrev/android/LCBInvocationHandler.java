/*    */ package com.runrev.android;
/*    */ 
/*    */ import java.lang.reflect.InvocationHandler;
/*    */ import java.lang.reflect.Method;
/*    */ import java.lang.reflect.Proxy;
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
/*    */ public class LCBInvocationHandler
/*    */   implements InvocationHandler
/*    */ {
/*    */   long m_handler_ptr;
/*    */   
/*    */   public LCBInvocationHandler(long paramLong) {
/* 28 */     this.m_handler_ptr = paramLong;
/*    */   }
/*    */ 
/*    */   
/*    */   public static Object getProxy(Class<?> paramClass, long paramLong) {
/* 33 */     LCBInvocationHandler lCBInvocationHandler = new LCBInvocationHandler(paramLong);
/*    */ 
/*    */     
/* 36 */     return Proxy.newProxyInstance(paramClass.getClassLoader(), new Class[] { paramClass }, lCBInvocationHandler);
/*    */   }
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */   
/*    */   public Object invoke(Object paramObject, Method paramMethod, Object[] paramArrayOfObject) {
/* 45 */     return doNativeListenerCallback(this.m_handler_ptr, paramMethod.getName(), paramArrayOfObject);
/*    */   }
/*    */   
/*    */   public static native Object doNativeListenerCallback(long paramLong, String paramString, Object[] paramArrayOfObject);
/*    */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/LCBInvocationHandler.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */