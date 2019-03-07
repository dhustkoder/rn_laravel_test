<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RestApiController extends Controller
{
    public function getServerMessage(Request $req) {
      return ["success" => true, "message" => "!!!RESPOSTA DO SERVIDOR AQUI!!!"];
    }
}
