/*     */ package com.runrev.android.nativecontrol;
/*     */ 
/*     */ import android.content.Context;
/*     */ import android.graphics.Color;
/*     */ import android.text.Selection;
/*     */ import android.text.Spannable;
/*     */ import android.text.method.MovementMethod;
/*     */ import android.text.method.PasswordTransformationMethod;
/*     */ import android.text.method.TransformationMethod;
/*     */ import android.view.KeyEvent;
/*     */ import android.view.LayoutInflater;
/*     */ import android.view.View;
/*     */ import android.view.inputmethod.InputMethodManager;
/*     */ import android.widget.TextView;
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
/*     */ class InputControl
/*     */   extends NativeControl
/*     */ {
/*     */   public static final String TAG = "revandroid.NativeInputControl";
/*     */   private InputView m_text_view;
/*     */   private MovementMethod m_movement_method;
/*     */   private TransformationMethod m_transformation_method;
/*  37 */   private int m_text_type = 0;
/*  38 */   private int m_text_type_flags = 0;
/*     */ 
/*     */   
/*     */   public InputControl(NativeControlModule paramNativeControlModule) {
/*  42 */     super(paramNativeControlModule);
/*     */   }
/*     */ 
/*     */   
/*     */   public View createView(Context paramContext) {
/*  47 */     LayoutInflater layoutInflater = LayoutInflater.from(paramContext);
/*  48 */     int i = paramContext.getResources().getIdentifier("layout/livecode_inputcontrol", null, paramContext.getPackageName());
/*     */     
/*  50 */     this.m_text_view = (InputView)layoutInflater.inflate(i, null);
/*     */     
/*  52 */     this.m_text_view.setOnFocusChangeListener(new View.OnFocusChangeListener()
/*     */         {
/*     */ 
/*     */           
/*     */           public void onFocusChange(View param1View, boolean param1Boolean)
/*     */           {
/*  58 */             if (param1Boolean) {
/*  59 */               InputControl.this.doBeginEditing();
/*     */             } else {
/*  61 */               InputControl.this.doEndEditing();
/*  62 */             }  NativeControlModule.getEngine().wakeEngineThread();
/*     */           }
/*     */         });
/*     */     
/*  66 */     this.m_text_view.setOnEditorActionListener(new TextView.OnEditorActionListener()
/*     */         {
/*     */ 
/*     */           
/*     */           public boolean onEditorAction(TextView param1TextView, int param1Int, KeyEvent param1KeyEvent)
/*     */           {
/*  72 */             InputControl.this.doReturnKey();
/*  73 */             NativeControlModule.getEngine().wakeEngineThread();
/*     */             
/*  75 */             return false;
/*     */           }
/*     */         });
/*     */     
/*  79 */     this.m_text_view.setOnTextChangedListener(new InputView.OnTextChangedListener()
/*     */         {
/*     */ 
/*     */           
/*     */           public void onTextChanged(CharSequence param1CharSequence, int param1Int1, int param1Int2, int param1Int3)
/*     */           {
/*  85 */             InputControl.this.doTextChanged();
/*  86 */             NativeControlModule.getEngine().wakeEngineThread();
/*     */           }
/*     */         });
/*     */     
/*  90 */     this.m_text_view.setGravity(51);
/*     */     
/*  92 */     return (View)this.m_text_view;
/*     */   }
/*     */ 
/*     */   
/*     */   public void setEnabled(boolean paramBoolean) {
/*  97 */     this.m_text_view.setEnabled(paramBoolean);
/*     */   }
/*     */ 
/*     */   
/*     */   public void setEditable(boolean paramBoolean) {
/* 102 */     this.m_text_view.setFocusable(paramBoolean);
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean getEnabled() {
/* 107 */     return this.m_text_view.isEnabled();
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean getEditable() {
/* 112 */     return this.m_text_view.isFocusable();
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public void setText(String paramString) {
/* 118 */     this.m_text_view.setText(paramString);
/*     */   }
/*     */ 
/*     */   
/*     */   public String getText() {
/* 123 */     return this.m_text_view.getText().toString();
/*     */   }
/*     */ 
/*     */   
/*     */   public void setTextColor(int paramInt1, int paramInt2, int paramInt3, int paramInt4) {
/* 128 */     this.m_text_view.setTextColor(Color.argb(paramInt4, paramInt1, paramInt2, paramInt3));
/*     */   }
/*     */ 
/*     */   
/*     */   public int getTextColor() {
/* 133 */     return this.m_text_view.getTextColors().getDefaultColor();
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public void setTextSize(int paramInt) {
/* 139 */     this.m_text_view.setTextSize(1, paramInt);
/*     */   }
/*     */ 
/*     */   
/*     */   public void setMultiLine(boolean paramBoolean) {
/* 144 */     int i = this.m_text_view.getInputType();
/*     */     
/* 146 */     if (paramBoolean) {
/* 147 */       i |= 0x20000;
/*     */     } else {
/* 149 */       i &= 0xFFFDFFFF;
/*     */     } 
/* 151 */     this.m_text_view.setInputType(i);
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean getMultiLine() {
/* 156 */     return (0 != (0x20000 & this.m_text_view.getInputType()));
/*     */   }
/*     */ 
/*     */   
/*     */   public int getTextSize() {
/* 161 */     return (int)(0.5D + (this.m_text_view.getTextSize() / (this.m_text_view.getContext().getResources().getDisplayMetrics()).density));
/*     */   }
/*     */ 
/*     */   
/*     */   public void setCapitalization(int paramInt) {
/* 166 */     int i = this.m_text_view.getInputType();
/* 167 */     i &= 0xFFFF8FFF;
/* 168 */     this.m_text_view.setInputType(i | paramInt);
/*     */   }
/*     */ 
/*     */   
/*     */   public int getCapitalization() {
/* 173 */     int i = this.m_text_view.getInputType();
/* 174 */     return i & 0x7000;
/*     */   }
/*     */ 
/*     */   
/*     */   public void setAutocorrect(boolean paramBoolean) {
/* 179 */     int i = this.m_text_view.getInputType();
/* 180 */     if (paramBoolean) {
/* 181 */       i |= 0x8000;
/*     */     } else {
/* 183 */       i &= 0xFFFF7FFF;
/* 184 */     }  this.m_text_view.setInputType(i);
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean getAutocorrect() {
/* 189 */     return (0 != (this.m_text_view.getInputType() & 0x8000));
/*     */   }
/*     */ 
/*     */   
/*     */   public void setKeyboardType(int paramInt) {
/* 194 */     int i = this.m_text_view.getInputType() & 0xFFF000;
/*     */     
/* 196 */     if (this.m_text_type_flags != 0) {
/* 197 */       i &= this.m_text_type_flags ^ 0xFFFFFFFF;
/*     */     }
/* 199 */     this.m_text_type = paramInt & 0xFFF;
/* 200 */     this.m_text_type_flags = paramInt & 0xFFF000;
/*     */     
/* 202 */     this.m_text_view.setInputType(this.m_text_type | this.m_text_type_flags | i);
/*     */   }
/*     */ 
/*     */   
/*     */   public int getKeyboardType() {
/* 207 */     if (this.m_text_type == 0) {
/* 208 */       return this.m_text_view.getInputType() & 0xF;
/*     */     }
/* 210 */     return this.m_text_type | this.m_text_type_flags;
/*     */   }
/*     */ 
/*     */   
/*     */   public void setReturnKeyType(int paramInt, String paramString) {
/* 215 */     int i = this.m_text_view.getImeOptions() & 0xFFFFFF00;
/* 216 */     this.m_text_view.setImeOptions(i | paramInt);
/*     */   }
/*     */ 
/*     */   
/*     */   public int getReturnKeyType() {
/* 221 */     return this.m_text_view.getImeOptions() & 0xFF;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public void setScrollingEnabled(boolean paramBoolean) {
/* 227 */     if (this.m_movement_method == null) {
/* 228 */       this.m_movement_method = this.m_text_view.getMovementMethod();
/*     */     }
/* 230 */     if (paramBoolean) {
/* 231 */       this.m_text_view.setMovementMethod(this.m_movement_method);
/*     */     } else {
/* 233 */       this.m_text_view.setMovementMethod(null);
/*     */     } 
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean getScrollingEnabled() {
/* 239 */     return (null != this.m_text_view.getMovementMethod());
/*     */   }
/*     */ 
/*     */   
/*     */   public void setIsPassword(boolean paramBoolean) {
/* 244 */     TransformationMethod transformationMethod = this.m_text_view.getTransformationMethod();
/*     */     
/* 246 */     if (paramBoolean && !(transformationMethod instanceof PasswordTransformationMethod)) {
/*     */       
/* 248 */       this.m_transformation_method = this.m_text_view.getTransformationMethod();
/* 249 */       this.m_text_view.setTransformationMethod((TransformationMethod)PasswordTransformationMethod.getInstance());
/* 250 */       this.m_text_view.setInputType(524416);
/*     */     }
/* 252 */     else if (!paramBoolean && this.m_transformation_method != null) {
/*     */       
/* 254 */       this.m_text_view.setTransformationMethod(this.m_transformation_method);
/*     */     } 
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean getIsPassword() {
/* 260 */     return this.m_text_view.getTransformationMethod() instanceof PasswordTransformationMethod;
/*     */   }
/*     */ 
/*     */   
/*     */   public void setDataDetectorTypes(int paramInt) {
/* 265 */     this.m_text_view.setAutoLinkMask(paramInt);
/*     */   }
/*     */ 
/*     */   
/*     */   public int getDataDetectorTypes() {
/* 270 */     return this.m_text_view.getAutoLinkMask();
/*     */   }
/*     */ 
/*     */   
/*     */   public void setTextAlign(int paramInt) {
/* 275 */     int i = this.m_text_view.getGravity();
/* 276 */     i &= 0xFFFFFFF8;
/* 277 */     i |= paramInt;
/* 278 */     this.m_text_view.setGravity(i);
/*     */   }
/*     */ 
/*     */   
/*     */   public int getTextAlign() {
/* 283 */     return this.m_text_view.getGravity() & 0x7;
/*     */   }
/*     */ 
/*     */   
/*     */   public void setVerticalAlign(int paramInt) {
/* 288 */     int i = this.m_text_view.getGravity();
/* 289 */     i &= 0xFFFFFF8F;
/* 290 */     i |= paramInt;
/*     */     
/* 292 */     this.m_text_view.setGravity(i);
/*     */   }
/*     */ 
/*     */   
/*     */   public int getVerticalAlign() {
/* 297 */     return this.m_text_view.getGravity() & 0x70;
/*     */   }
/*     */ 
/*     */   
/*     */   public void setSelectedRange(int paramInt1, int paramInt2) {
/* 302 */     Selection.setSelection((Spannable)this.m_text_view.getText(), paramInt1 - 1, paramInt1 - 1 + paramInt2);
/*     */   }
/*     */ 
/*     */   
/*     */   public int getSelectedRangeStart() {
/* 307 */     return Selection.getSelectionStart((CharSequence)this.m_text_view.getText()) + 1;
/*     */   }
/*     */ 
/*     */   
/*     */   public int getSelectedRangeLength() {
/* 312 */     return Selection.getSelectionEnd((CharSequence)this.m_text_view.getText()) + 1 - Selection.getSelectionStart((CharSequence)this.m_text_view.getText());
/*     */   }
/*     */ 
/*     */   
/*     */   public void focusControl() {
/* 317 */     this.m_text_view.requestFocus();
/*     */ 
/*     */     
/* 320 */     InputMethodManager inputMethodManager = (InputMethodManager)this.m_text_view.getContext().getSystemService("input_method");
/*     */     
/* 322 */     if (inputMethodManager != null) {
/* 323 */       inputMethodManager.restartInput((View)this.m_text_view);
/*     */     }
/* 325 */     inputMethodManager.showSoftInput((View)this.m_text_view, 1);
/*     */   }
/*     */   
/*     */   public native void doBeginEditing();
/*     */   
/*     */   public native void doEndEditing();
/*     */   
/*     */   public native void doTextChanged();
/*     */   
/*     */   public native void doReturnKey();
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/nativecontrol/InputControl.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */