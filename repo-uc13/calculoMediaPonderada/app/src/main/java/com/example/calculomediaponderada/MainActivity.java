package com.example.calculomediaponderada;

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
    public void calcular (View view) {
        EditText nota = findViewById(R.id.editTextNumberNota);
        EditText nota2 = findViewById(R.id.editTextNumberNota2);
        EditText nota3 = findViewById(R.id.editTextNumberNota3);

        EditText peso = findViewById(R.id.editTextPeso);
        EditText peso2 = findViewById(R.id.editTextPeso2);
        EditText peso3 = findViewById(R.id.editTextPeso3);

        String notaString = nota.getText().toString();
        String notaString2 = nota2.getText().toString();
        String notaString3 = nota3.getText().toString();

        String pesoString = peso.getText().toString();
        String pesoString2 = peso2.getText().toString();
        String pesoString3 = peso3.getText().toString();

        float notaFloat = Float.parseFloat(notaString);
        float notaFloat2 = Float.parseFloat(notaString2);
        float notaFloat3 = Float.parseFloat(notaString3);

        float pesoFloat = Float.parseFloat(pesoString);
        float pesoFloat2 = Float.parseFloat(pesoString2);
        float pesoFloat3 = Float.parseFloat(pesoString3);

        float operacao = (notaFloat * pesoFloat + notaFloat2 * pesoFloat2 + notaFloat3 * pesoFloat3) / (pesoFloat + pesoFloat2 + pesoFloat3);
        Toast.makeText(this, "Resultado:"+operacao, Toast.LENGTH_LONG).show();


    }
}