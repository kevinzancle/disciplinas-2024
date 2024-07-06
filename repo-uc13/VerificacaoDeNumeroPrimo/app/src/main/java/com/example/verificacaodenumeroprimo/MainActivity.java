package com.example.verificacaodenumeroprimo;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });
    }
    public void verificador (View view){
         EditText numero = findViewById(R.id.editTextNumeroIn);
         String numeroString = numero.getText().toString();
         int numeroInt = Integer.parseInt(numeroString);
         boolean estado = true;
         double raizNumero = Math.sqrt(numeroInt);
         for (int i = 2; i<=raizNumero; i++){
             if(numeroInt%i==0){
                 estado = false;
             }

         }
        if(estado == true){
            Toast.makeText(this, "O número digitado é primo!", Toast.LENGTH_LONG).show();
        }else{
            Toast.makeText(this, "O número digitado não é primo!", Toast.LENGTH_LONG).show();
        }
    }
}