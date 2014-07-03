<!DOCTYPE html>
<!--
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
     KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
-->
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <link rel="stylesheet" type="text/css" href="css/jquery.mobile-1.4.2.min.css" />
        <link rel="stylesheet" type="text/css" href="css/estilo.css" />
        <link rel="stylesheet" href="css/layout.css" type="text/css" />
        <script type="text/javascript" src="js/jquery.js"></script>

        <script type="text/javascript" src="js/jquery.mobile-1.4.2.min.js"></script>

        <script src="js/countdown_plugins.js"></script>
        <script src="js/lang/jquery.countdown-es.js"></script>
        <script src="js/countdown.js"></script>
        
        <script type="text/javascript" src="js/app.js"></script>
        <title>Concurso</title>
    </head>
    <body>
        <div data-role="page" id="page1">

           

            <div role="main" class="ui-content">
               </br>
               </br>
               </br>
              <input id="nombre" placeholder="Nombre" value="" type="text"> 
              <input id="email"  placeholder="E-Mail" value="" type="text">   
              <button id="npage2" class="ui-btn ui-shadow ui-icon-arrow-r ui-btn-icon-right">Siguiente</button>

               

            </div><!-- /content -->
        </div><!-- /page -->

         <div data-role="page" id="page2">
            <div role="main" class="ui-content">
              <br/> 
              <br/>
              <br/>
               <button id="npage3" class="ui-btn ui-shadow ui-icon-arrow-r ui-btn-icon-right">Jugar!</button>

            </div><!-- /content -->
        </div><!-- /page -->


        <div data-role="page" id="page3">
              <div role="main" class="ui-content">
              <div id="countdown_container">
 
   
 
    <div id="countdown_timer"></div>
     
    <div id="countdown_clock">
                 
      
        <canvas id="circular_countdown_seconds" width="160" height="160"></canvas>
              
    </div>
 
</div>
              

               </div><!-- /content -->
        </div><!-- /page -->



              <div data-role="page" id="page4">
              <div role="main" class="ui-content">
          <br/>
          <br/>

              <input name="number" pattern="[0-9]*" id="nelementos" value="" type="number">
              <button id="fin" class="ui-btn ui-shadow ui-icon-arrow-r ui-btn-icon-right">Siguiente</button>


                
             

               

            </div><!-- /content -->
        </div><!-- /page -->

        <div data-role="page" id="page5">
              <div role="main" class="ui-content">
                
             

              

                
             

               

            </div><!-- /content -->
        </div><!-- /page -->



       
        <!--<script type="text/javascript" src="cordova.js"></script>
        <script type="text/javascript" src="js/index.js"></script>-->
        



        <script type="text/javascript">
            
        </script>
    </body>
</html>
