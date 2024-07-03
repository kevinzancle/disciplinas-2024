package com.example.calculadorabasica;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
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
    public void processo(View view){
        EditText primeiroNum = findViewById(R.id.primeiroNumero);
        EditText segundoNum = findViewById(R.id.segundoNumero);
        EditText seletorOperacao = findViewById(R.id.operador);
        TextView resultadoVisivel = findViewById(R.id.resultado);

        String collect1 = primeiroNum.getText().toString();
        String collect2 = segundoNum.getText().toString();
        String operacaoEscolhida = seletorOperacao.getText().toString();

        float num1 = Float.parseFloat(String.valueOf(collect1));
        float num2 = Float.parseFloat(String.valueOf(collect2));
        float resultado = 0;

        switch (operacaoEscolhida){
            case "+":
                resultado = num1 + num2;
                break;
            case "-":
                resultado = num1 - num2;
                break;
            case "*":
                resultado = num1 * num2;
                break;
            case "/":
                resultado = num1 / num2;
                break;
        }
        resultadoVisivel.setText(String.valueOf(resultado));


    }

}