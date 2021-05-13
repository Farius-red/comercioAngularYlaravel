<?php

namespace App\Http\Controllers;


use App\Models\pedidos;
use Exception;
use Illuminate\Http\Request;

class PedidosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $pedidos = Pedidos::get();
       echo json_encode($pedidos);
    }




    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $pedido = new Pedidos();
        $pedido->id = $request->input('id');
        $pedido->fechaEntrega = $request->input('fechaEntrega');
        $pedido->productos = $request->input('productos');
        $pedido->cantidad = $request->input('cantidad');

        $res = $pedido->save();
        try {
            if ($res) {
                return response()->json(['message' => 'Post create succesfully'], 201);
            }
            return response()->json(['message' => 'Error to create post'], 500);
        } catch (Exception $th) {
            return $th;
        }
    }





    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\pedidos  $pedidos
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, pedidos $pedidos)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\pedidos  $pedidos
     * @return \Illuminate\Http\Response
     */
    public function destroy(pedidos $pedidos)
    {
        echo "hello destroy";
    }
}