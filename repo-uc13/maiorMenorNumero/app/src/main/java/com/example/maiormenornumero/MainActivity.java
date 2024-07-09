package com.example.maiormenornumero;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import java.util.Arrays;

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
    public void magia(View view) {
        EditText numeros = findViewById(R.id.editTextNumeros);
        String numerosString = numeros.getText().toString();
        String[] array = numerosString.split(" ");

        if (array.length != 5) {
            Toast.makeText(this, "Coloque 5 NÚMEROS!!!", Toast.LENGTH_SHORT).show();
        }
        else {
            float primeiroNumero = Float.parseFloat(array[0]);
            float maiorNumero = primeiroNumero;
            float menorNumero = primeiroNumero;

            for (int i = 1; i < array.length; i++) {
                float numero = Float.parseFloat(array[i]);
                if (numero > maiorNumero) {
                    maiorNumero = numero;
                }
                if (numero < menorNumero) {
                    menorNumero = numero;
                }
            }

            String resultado = "Maior número: " + maiorNumero + "\nMenor número: " + menorNumero;
            Toast.makeText(this, resultado, Toast.LENGTH_LONG).show();
        }
    }
}