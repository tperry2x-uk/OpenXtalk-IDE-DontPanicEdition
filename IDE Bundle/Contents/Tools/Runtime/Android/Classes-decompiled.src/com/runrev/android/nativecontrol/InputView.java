/*    */ package com.runrev.android.nativecontrol;
/*    */ 
/*    */ import android.content.Context;
/*    */ import android.util.AttributeSet;
/*    */ import android.widget.EditText;
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
/*    */ public class InputView
/*    */   extends EditText
/*    */ {
/*    */   public static final String TAG = "revandroid.InputView";
/*    */   private OnTextChangedListener m_text_changed_listener;
/*    */   
/*    */   public InputView(Context paramContext) {
/* 32 */     super(paramContext);
/*    */   }
/*    */ 
/*    */   
/*    */   public InputView(Context paramContext, AttributeSet paramAttributeSet) {
/* 37 */     super(paramContext, paramAttributeSet);
/*    */   }
/*    */ 
/*    */   
/*    */   public InputView(Context paramContext, AttributeSet paramAttributeSet, int paramInt) {
/* 42 */     super(paramContext, paramAttributeSet, paramInt);
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
/*    */   public void setOnTextChangedListener(OnTextChangedListener paramOnTextChangedListener) {
/* 54 */     this.m_text_changed_listener = paramOnTextChangedListener;
/*    */   }
/*    */ 
/*    */ 
/*    */   
/*    */   public void onTextChanged(CharSequence paramCharSequence, int paramInt1, int paramInt2, int paramInt3) {
/* 60 */     if (this.m_text_changed_listener != null) {
/* 61 */       this.m_text_changed_listener.onTextChanged(paramCharSequence, paramInt1, paramInt2, paramInt3);
/*    */     }
/* 63 */     super.onTextChanged(paramCharSequence, paramInt1, paramInt2, paramInt3);
/*    */   }
/*    */   
/*    */   public static interface OnTextChangedListener {
/*    */     void onTextChanged(CharSequence param1CharSequence, int param1Int1, int param1Int2, int param1Int3);
/*    */   }
/*    */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/nativecontrol/InputView.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */