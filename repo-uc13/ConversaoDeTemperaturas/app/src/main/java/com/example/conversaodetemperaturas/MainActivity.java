package com.example.conversaodetemperaturas;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

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

    public void converter (View view){
        EditText valorObjeto = findViewById(R.id.input1);
        TextView saida = findViewById(R.id.textViewOut);
        String valorString = String.valueOf(valorObjeto.getText());
        float valorFloat = Float.parseFloat(valorString);
        float kelvin = valorFloat+273;
        float fahrenheit = ((valorFloat*9)/5)+32;
        saida.setText("Kelvin = "+kelvin+"°K"+"\n"+"Fahrenheit = "+fahrenheit+"°F");
    }
}