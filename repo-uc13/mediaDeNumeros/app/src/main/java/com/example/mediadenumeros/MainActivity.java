package com.example.mediadenumeros;

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
    public void calcular (View view){
        EditText numeros = findViewById(R.id.editTextNumeros);

        String numerosString = numeros.getText().toString();

        String[] numerosArray = numerosString.split(" ");
        float armazenador = 0;
        int quantidadeFloat = numerosArray.length;

        for(String numero: numerosArray){
            armazenador += Float.parseFloat(numero);
        }
        float resultado = armazenador/quantidadeFloat;
        Toast.makeText(this, "A média é: "+resultado, Toast.LENGTH_LONG).show();
    }



}