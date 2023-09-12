/*     */ package com.runrev.android;
/*     */ 
/*     */ import android.app.AlertDialog;
/*     */ import android.app.DatePickerDialog;
/*     */ import android.app.TimePickerDialog;
/*     */ import android.content.DialogInterface;
/*     */ import android.os.Build;
/*     */ import android.text.Editable;
/*     */ import android.util.Log;
/*     */ import android.view.View;
/*     */ import android.widget.DatePicker;
/*     */ import android.widget.EditText;
/*     */ import android.widget.TimePicker;
/*     */ import java.lang.reflect.Method;
/*     */ import java.util.Calendar;
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
/*     */ class DialogModule
/*     */ {
/*     */   public static final String TAG = "revandroid.DialogModule";
/*     */   protected Engine m_engine;
/*     */   protected int m_list_selection;
/*     */   protected boolean m_list_close_on_selection;
/*     */   AlertDialog m_list_dialog;
/*     */   
/*     */   public DialogModule(Engine paramEngine) {
/*  36 */     this.m_engine = paramEngine;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public void showAnswerDialog(String paramString1, String paramString2, String paramString3, String paramString4, String paramString5) {
/*  42 */     DialogInterface.OnClickListener onClickListener = new DialogInterface.OnClickListener()
/*     */       {
/*     */         public void onClick(DialogInterface param1DialogInterface, int param1Int) {
/*  45 */           if (param1Int == -1) {
/*  46 */             param1Int = 0;
/*  47 */           } else if (param1Int == -2) {
/*  48 */             param1Int = 1;
/*     */           } else {
/*  50 */             param1Int = 2;
/*  51 */           }  DialogModule.this.m_engine.onAnswerDialogDone(param1Int);
/*     */         }
/*     */       };
/*     */     
/*  55 */     DialogInterface.OnCancelListener onCancelListener = new DialogInterface.OnCancelListener()
/*     */       {
/*     */         public void onCancel(DialogInterface param1DialogInterface) {
/*  58 */           DialogModule.this.m_engine.onAnswerDialogDone(1);
/*     */         }
/*     */       };
/*     */ 
/*     */     
/*  63 */     AlertDialog.Builder builder = new AlertDialog.Builder(this.m_engine.getContext());
/*  64 */     builder.setTitle(paramString1);
/*  65 */     builder.setMessage(paramString2);
/*  66 */     builder.setPositiveButton(paramString3, onClickListener);
/*  67 */     if (paramString4 != null)
/*  68 */       builder.setNegativeButton(paramString4, onClickListener); 
/*  69 */     if (paramString5 != null)
/*  70 */       builder.setNeutralButton(paramString5, onClickListener); 
/*  71 */     builder.setOnCancelListener(onCancelListener);
/*  72 */     builder.show();
/*     */   }
/*     */ 
/*     */   
/*     */   public void showAskDialog(boolean paramBoolean1, String paramString1, String paramString2, String paramString3, boolean paramBoolean2) {
/*  77 */     final EditText t_textview = new EditText(this.m_engine.getContext());
/*  78 */     if (paramBoolean2) {
/*  79 */       editText.setHint(paramString3);
/*     */     } else {
/*  81 */       editText.setText(paramString3);
/*     */     } 
/*  83 */     int i = this.m_engine.getInputType(paramBoolean1);
/*  84 */     editText.setInputType(i);
/*     */ 
/*     */     
/*  87 */     DialogInterface.OnClickListener onClickListener = new DialogInterface.OnClickListener()
/*     */       {
/*     */         public void onClick(DialogInterface param1DialogInterface, int param1Int) {
/*  90 */           String str = null;
/*  91 */           if (param1Int == -1) {
/*     */             
/*  93 */             Editable editable = t_textview.getText();
/*  94 */             str = editable.toString();
/*     */           } else {
/*     */             
/*  97 */             str = null;
/*  98 */           }  DialogModule.this.m_engine.onAskDialogDone(str);
/*     */         }
/*     */       };
/*     */ 
/*     */     
/* 103 */     DialogInterface.OnCancelListener onCancelListener = new DialogInterface.OnCancelListener()
/*     */       {
/*     */         public void onCancel(DialogInterface param1DialogInterface) {
/* 106 */           DialogModule.this.m_engine.onAskDialogDone((String)null);
/*     */         }
/*     */       };
/*     */ 
/*     */     
/* 111 */     AlertDialog.Builder builder = new AlertDialog.Builder(this.m_engine.getContext());
/* 112 */     builder.setTitle(paramString1);
/* 113 */     builder.setView((View)editText);
/* 114 */     builder.setMessage(paramString2);
/* 115 */     builder.setPositiveButton("OK", onClickListener);
/* 116 */     builder.setNegativeButton("Cancel", onClickListener);
/* 117 */     builder.setOnCancelListener(onCancelListener);
/* 118 */     AlertDialog alertDialog = builder.show();
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public void showDatePicker(boolean paramBoolean1, boolean paramBoolean2, long paramLong1, long paramLong2, long paramLong3) {
/* 124 */     DialogInterface.OnCancelListener onCancelListener = new DialogInterface.OnCancelListener()
/*     */       {
/*     */         public void onCancel(DialogInterface param1DialogInterface) {
/* 127 */           DialogModule.this.m_engine.onDatePickerDone(0, 0, 0, false);
/*     */         }
/*     */       };
/*     */ 
/*     */     
/* 132 */     DatePickerDialog.OnDateSetListener onDateSetListener = new DatePickerDialog.OnDateSetListener()
/*     */       {
/*     */         
/*     */         public void onDateSet(DatePicker param1DatePicker, int param1Int1, int param1Int2, int param1Int3)
/*     */         {
/* 137 */           DialogModule.this.m_engine.onDatePickerDone(param1Int1, param1Int2 + 1, param1Int3, true);
/*     */         }
/*     */       };
/*     */ 
/*     */     
/* 142 */     DialogInterface.OnDismissListener onDismissListener = new DialogInterface.OnDismissListener()
/*     */       {
/*     */         public void onDismiss(DialogInterface param1DialogInterface) {
/* 145 */           DialogModule.this.m_engine.onDatePickerDone(0, 0, 0, false);
/*     */         }
/*     */       };
/*     */     
/* 149 */     Calendar calendar = Calendar.getInstance();
/* 150 */     calendar.setTimeInMillis(paramLong3 * 1000L);
/*     */ 
/*     */ 
/*     */ 
/*     */     
/* 155 */     DatePickerDialog datePickerDialog = new DatePickerDialog(this.m_engine.getContext(), 16974545, onDateSetListener, calendar.get(1), calendar.get(2), calendar.get(5));
/* 156 */     datePickerDialog.setOnCancelListener(onCancelListener);
/* 157 */     datePickerDialog.setOnDismissListener(onDismissListener);
/*     */     
/* 159 */     if (Build.VERSION.SDK_INT >= 11) {
/*     */ 
/*     */ 
/*     */       
/* 163 */       DatePicker datePicker = null;
/*     */ 
/*     */ 
/*     */       
/*     */       try {
/* 168 */         Method method = datePickerDialog.getClass().getMethod("getDatePicker", (Class[])null);
/* 169 */         datePicker = (DatePicker)method.invoke(datePickerDialog, (Object[])null);
/*     */         
/* 171 */         if (paramBoolean1) {
/*     */ 
/*     */           
/* 174 */           Method method1 = datePicker.getClass().getMethod("setMinDate", new Class[] { long.class });
/* 175 */           method1.invoke(datePicker, new Object[] { Long.valueOf(paramLong1 * 1000L) });
/*     */         } 
/*     */         
/* 178 */         if (paramBoolean2)
/*     */         {
/*     */           
/* 181 */           Method method1 = datePicker.getClass().getMethod("setMaxDate", new Class[] { long.class });
/* 182 */           method1.invoke(datePicker, new Object[] { Long.valueOf(paramLong2 * 1000L) });
/*     */         }
/*     */       
/* 185 */       } catch (Exception exception) {}
/*     */     } 
/*     */ 
/*     */     
/* 189 */     datePickerDialog.show();
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public void showTimePicker(int paramInt1, int paramInt2) {
/* 195 */     DialogInterface.OnCancelListener onCancelListener = new DialogInterface.OnCancelListener()
/*     */       {
/*     */         public void onCancel(DialogInterface param1DialogInterface) {
/* 198 */           DialogModule.this.m_engine.onTimePickerDone(0, 0, false);
/*     */         }
/*     */       };
/*     */ 
/*     */     
/* 203 */     DialogInterface.OnDismissListener onDismissListener = new DialogInterface.OnDismissListener()
/*     */       {
/*     */         public void onDismiss(DialogInterface param1DialogInterface) {
/* 206 */           DialogModule.this.m_engine.onTimePickerDone(0, 0, false);
/*     */         }
/*     */       };
/*     */ 
/*     */     
/* 211 */     TimePickerDialog.OnTimeSetListener onTimeSetListener = new TimePickerDialog.OnTimeSetListener()
/*     */       {
/*     */         public void onTimeSet(TimePicker param1TimePicker, int param1Int1, int param1Int2)
/*     */         {
/* 215 */           DialogModule.this.m_engine.onTimePickerDone(param1Int1, param1Int2, true);
/*     */         }
/*     */       };
/*     */     
/* 219 */     TimePickerDialog timePickerDialog = new TimePickerDialog(this.m_engine.getContext(), 16974545, onTimeSetListener, paramInt1, paramInt2, false);
/*     */ 
/*     */     
/* 222 */     timePickerDialog.setOnCancelListener(onCancelListener);
/* 223 */     timePickerDialog.setOnDismissListener(onDismissListener);
/*     */     
/* 225 */     timePickerDialog.show();
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public void showListPicker(String[] paramArrayOfString, String paramString, boolean paramBoolean1, int paramInt, boolean paramBoolean2, boolean paramBoolean3, boolean paramBoolean4) {
/* 234 */     this.m_list_selection = paramInt - 1;
/* 235 */     this.m_list_close_on_selection = (!paramBoolean4 || paramBoolean2);
/*     */     
/* 237 */     Log.i("revandroid.DialogModule", String.format("showListPicker(items, title, %b, %d, %b, %b, %b)", new Object[] { Boolean.valueOf(paramBoolean1), Integer.valueOf(paramInt), Boolean.valueOf(paramBoolean2), Boolean.valueOf(paramBoolean3), Boolean.valueOf(paramBoolean4) }));
/*     */     
/* 239 */     DialogInterface.OnClickListener onClickListener1 = new DialogInterface.OnClickListener()
/*     */       {
/*     */         public void onClick(DialogInterface param1DialogInterface, int param1Int) {
/* 242 */           Log.i("revandroid.DialogModule", "clicked:" + param1Int);
/* 243 */           if (DialogModule.this.m_list_close_on_selection) {
/*     */ 
/*     */             
/* 246 */             DialogModule.this.m_list_dialog.dismiss();
/* 247 */             DialogModule.this.m_engine.onListPickerDone(param1Int, true);
/*     */           } else {
/*     */             
/* 250 */             DialogModule.this.m_list_selection = param1Int;
/*     */           } 
/*     */         }
/*     */       };
/*     */     
/* 255 */     DialogInterface.OnCancelListener onCancelListener = new DialogInterface.OnCancelListener()
/*     */       {
/*     */         public void onCancel(DialogInterface param1DialogInterface) {
/* 258 */           DialogModule.this.m_engine.onListPickerDone(0, false);
/*     */         }
/*     */       };
/*     */ 
/*     */     
/* 263 */     DialogInterface.OnClickListener onClickListener2 = new DialogInterface.OnClickListener()
/*     */       {
/*     */         public void onClick(DialogInterface param1DialogInterface, int param1Int) {
/* 266 */           if (param1Int == -1) {
/* 267 */             DialogModule.this.m_engine.onListPickerDone(DialogModule.this.m_list_selection, true);
/* 268 */           } else if (param1Int == -2) {
/* 269 */             DialogModule.this.m_engine.onListPickerDone(0, false);
/*     */           } 
/*     */         }
/*     */       };
/* 273 */     AlertDialog.Builder builder = new AlertDialog.Builder(this.m_engine.getContext());
/* 274 */     if (paramString != null) {
/* 275 */       builder.setTitle(paramString);
/*     */     }
/* 277 */     if (!paramBoolean2) {
/* 278 */       builder.setSingleChoiceItems((CharSequence[])paramArrayOfString, paramBoolean1 ? (paramInt - 1) : -1, onClickListener1);
/*     */     } else {
/* 280 */       builder.setItems((CharSequence[])paramArrayOfString, onClickListener1);
/*     */     } 
/* 282 */     if (paramBoolean3)
/* 283 */       builder.setNegativeButton("Cancel", onClickListener2); 
/* 284 */     if (paramBoolean4) {
/* 285 */       builder.setPositiveButton("Done", onClickListener2);
/*     */     }
/* 287 */     builder.setOnCancelListener(onCancelListener);
/*     */     
/* 289 */     this.m_list_dialog = builder.create();
/*     */     
/* 291 */     if (paramBoolean1)
/* 292 */       this.m_list_dialog.getListView().setSelection(paramInt - 1); 
/* 293 */     this.m_list_dialog.show();
/*     */   }
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/DialogModule.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */