<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="{{ url('/css/open-iconic-bootstrap.min.css')}}">
        <link rel="stylesheet" href="{{ url('/css/animate.css')}}">
        
        <link rel="stylesheet" href="{{ url('/css/owl.carousel.min.css')}}">
        <link rel="stylesheet" href="{{ url('/css/owl.theme.default.min.css')}}">
        <link rel="stylesheet" href="{{ url('/css/magnific-popup.css')}}">


        <link rel="stylesheet" href="{{ url('/css/ionicons.min.css')}}">

        <link rel="stylesheet" href="{{ url('/css/bootstrap-datepicker.css')}}">
        <link rel="stylesheet" href="{{ url('/css/jquery.timepicker.css')}}">

        
        <link rel="stylesheet" href="{{ url('/css/flaticon.css')}}">
        <link rel="stylesheet" href="{{ url('/css/icomoon.css')}}">
        <link rel="stylesheet" href="{{ url('/css/style.css')}}">


        <!-- Scripts -->
        <script src="{{url('/js/jquery.min.js')}}"></script>
        <script src="{{url('/js/jquery-migrate-3.0.1.min.js')}}"></script>
        <script src="{{url('/js/popper.min.js')}}"></script>
        <script src="{{url('/js/bootstrap.min.js')}}"></script>
        <script src="{{url('/js/jquery.easing.1.3.js')}}"></script>
        <script src="{{url('/js/jquery.waypoints.min.js')}}"></script>
        <script src="{{url('/js/jquery.stellar.min.js')}}"></script>
        <script src="{{url('/js/owl.carousel.min.js')}}"></script>
        <script src="{{url('/js/jquery.magnific-popup.min.js')}}"></script>
        <script src="{{url('/js/jquery.animateNumber.min.js')}}"></script>
        <script src="{{url('/js/bootstrap-datepicker.js')}}"></script>
        <script src="{{url('/js/jquery.timepicker.min.js')}}"></script>
        <script src="{{url('/js/scrollax.min.js')}}"></script>
        <script src="{{url('/js/main.js')}}"></script>
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-poppins antialiased">
        @inertia
    </body>
</html>
