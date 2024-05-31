package com.example.aula17_final;

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
    public void calculate (View view) {

        EditText frstValue = findViewById(R.id.input1);
        EditText scndValue = findViewById(R.id.input2);

        double soma = 0;
        double subtracao = 0;
        double multiplicacao = 0;
        double divisao = 0;
        double resto = 0;

        double value1 = 0;
        double value2 = 0;
        if ((frstValue.getText().toString().isEmpty()) || (scndValue.getText().toString().isEmpty())) {

            Toast.makeText(this, "Insira os valores", Toast.LENGTH_SHORT).show();
        } else {
            value1 = 0;
            value1 = Double.parseDouble(frstValue.getText().toString());

            value2 = 0;
            value2 = Double.parseDouble(scndValue.getText().toString());
        }

        if (value1 == 0 && value2 == 0) {

            Toast.makeText(this, "insira valores diferentes de 0", Toast.LENGTH_SHORT).show();

        }
        else {

            soma = soma(value1,value2);
            subtracao = subtracao(value1,value2);
            multiplicacao = multiplicacao(value1,value2);
            divisao = divisao(value1,value2);
            resto = resto(value1,value2);

        }
        if (Double.isNaN(soma) || (Double.isNaN(subtracao)) || (Double.isNaN(multiplicacao)) || (Double.isNaN(divisao)) || (Double.isNaN(resto))){
            soma = 0;
            subtracao = 0;
            multiplicacao = 0;
            divisao = 0;
            resto = 0;
        }

        String resultSoma = String.valueOf(soma);
        String resultSub = String.valueOf(subtracao);
        String resultMult = String.valueOf(multiplicacao);
        String resultDiv = String.valueOf(divisao);
        String resultRest = String.valueOf(resto);

        TextView txtSoma = findViewById(R.id.textView2);
        TextView txtSub = findViewById(R.id.textView3);
        TextView txtMult = findViewById(R.id.textView4);
        TextView txtDiv = findViewById(R.id.textView5);
        TextView txtRest = findViewById(R.id.textView6);

        txtSoma.setText(resultSoma);
        txtSub.setText(resultSub);
        txtMult.setText(resultMult);
        txtDiv.setText(resultDiv);
        txtRest.setText(resultRest);
    }

    public double soma(double x, double y){
        double result = x + y;
        return result;
    }

    public double subtracao(double x, double y){
        double result = x - y;
        return result;
    }

    public double multiplicacao(double x, double y){
        double result = x * y;
        return result;
    }

    public double divisao(double x, double y){
        double result = x / y;
        return result;
    }

    public double resto(double x, double y){
        double result= x % y;
        return result;
    }










}