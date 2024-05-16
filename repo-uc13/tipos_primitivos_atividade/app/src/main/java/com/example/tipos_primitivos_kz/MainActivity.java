package com.example.tipos_primitivos_kz;

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

    public void acao1(View view){
        EditText txtInt = findViewById(R.id.int_input);
        int testeint = 0;
        testeint = Integer.parseInt(txtInt.getText().toString());
        Toast.makeText(this,"O inteiro digitado é: "+ testeint, Toast.LENGTH_SHORT).show();
    }

    public void acao2(View view){
        EditText txtdouble = findViewById(R.id.double_input);
        double testedouble = 0;
        testedouble = Double.parseDouble(txtdouble.getText().toString());
        Toast.makeText(this,"O double digitado é: "+ testedouble, Toast.LENGTH_SHORT).show();
    }

    public void acao3(View view){
        EditText txtstr = findViewById(R.id.str_input);
        String testestr = "";
        testestr= (txtstr.getText().toString());
        Toast.makeText(this,"A String  digitado é: "+ testestr, Toast.LENGTH_SHORT).show();
    }










}