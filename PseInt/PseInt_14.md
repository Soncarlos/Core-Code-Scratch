# Date 21/12/2022

## PseudoCode using PSEINT

### CASHIER

 	   Funcion BalWDraw <- WithDraw(Balance)
           Definir draw Como Entero;
           draw=0;
           Imprimir 'INPUT THE AMOUNT TO WITHDRAW';
           Leer draw
           alWDraw=Balance-draw;
           Imprimir 'YOUR NEW BALANCE IS :', BalWDraw;
           Imprimir 'Press any key to continue'
           Leer  key;
           Limpiar Pantalla
	   FinFuncion
		
       		 Funcion BalDeposit<- Deposit(Balance) 
                Definir depos Como Entero;
                depos=0;
                Imprimir 'INPUT THE AMOUNT TO DEPOSIT';
                Leer depos
                BalDeposit=Balance+depos;
                Imprimir 'YOUR NEW BALANCE IS :', BalDeposit;
                Imprimir 'Press any key to continue'
                Leer  key;
                Limpiar Pantalla
		FinFuncion
		
      		Algoritmo Cashier
                Definir  Bal Como Entero;
                Bal =1000;	
                Hacer
                        Imprimir '===============MENU OPTIONS================'
                        Imprimir '===Press a to Deposit';
                        Imprimir '===Press b to WithDraw';
                        Imprimir '===Press c to go out';
                        Leer op
                        Segun  op
                                'a': Bal=Deposit(Bal);
                                'b': Bal= WithDraw(Bal);
                                'c': Imprimir 'Thanks for use our Cashier';			
                        FinSegun
                Mientras Que op <> 'c'	
	FinAlgoritmo

### AVERAGE WEATHER

		Funcion Convertcelsius<- Celsius(Far)
		Definir Convertcelsius Como real;
		Convertcelsius = trunc(Far - 32) * 0.5556;	
		FinFuncion
		Algoritmo AverageWeather
                Definir AveCelsius Como real;
                Definir CounterC, degress Como Entero;
                AveCelsius=0;	
                CounterC=0;	
                        Hacer
                        Imprimir '===============SELECT AN OPTION================'
                        Imprimir '=== a-> Enter degrees Celsius';
                        Imprimir '=== b-> Enter degrees Farhenheit';
                        Imprimir '=== x-> Press x  go out';
                        Leer op
                        Segun  op
                                'a': Imprimir ' INPUT AMOUNT';
                                        Leer degress;
                                        AveCelsius=AveCelsius+degress;
                                        CounterC=CounterC+1;				
                                'b': Imprimir ' INPUT AMOUNT';
                                        Leer degress;
                                        AveCelsius=AveCelsius + Celsius(degress);
                                        CounterC=CounterC+1;  		
                        FinSegun		
                Mientras Que op <> 'x'		
                Imprimir 'AVERAGE OF CELSIUS : ',trunc(AveCelsius/CounterC);	
	FinAlgoritmo
