package com.example.tabuada;

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
    public void gerar (View view){
        TextView mudar = findViewById(R.id.textViewOut);
        EditText numero = findViewById(R.id.inputNumero);
        String numeroStr = numero.getText().toString();
        float numeroFloat = Float.parseFloat(String.valueOf(numeroStr));
        float tabuada1 = numeroFloat*1;
        float tabuada2 = numeroFloat*2;
        float tabuada3 = numeroFloat*3;
        float tabuada4 = numeroFloat*4;
        float tabuada5 = numeroFloat*5;
        float tabuada6 = numeroFloat*6;
        float tabuada7 = numeroFloat*7;
        float tabuada8 = numeroFloat*8;
        float tabuada9 = numeroFloat*9;
        float tabuada10 = numeroFloat*10;
        mudar.setText(numeroFloat+" X 1 = "+ tabuada1 +"\n"+numeroFloat+" X 2 = "+ tabuada2+"\n"+numeroFloat+" X 3 = "+ tabuada3+"\n"+numeroFloat+" X 4 = "+ tabuada4+"\n"+numeroFloat+" X 5 = "+ tabuada5+"\n"+numeroFloat+" X 6 = "+ tabuada6+"\n"+numeroFloat+" X 7 = "+ tabuada7+"\n"+numeroFloat+" X 8 = "+ tabuada8+"\n"+numeroFloat+" X 9 = "+ tabuada9+"\n"+numeroFloat+" X 10 = "+ tabuada10);
    }
}