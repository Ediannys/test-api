<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\User;
use App\Ticket;



class TicketController extends Controller
{

    public function create_ticket(Request $request){

        $request->validate([
            'user_id'     => ['required'],
            'issue'       => ['required'],
            'status'      => ['required']           
        ]);

        $ticket = new Ticket([
            'user_id'     => $request->user_id,
            'issue'     => $request->issue,
            'status'     => $request->status,
           
        ]);

        $ticket->save();

       
        return response()->json([
            'message' => 'Successfully created ticket!'], 201);
    }

    public function list_tickets(){

        $tickets = Ticket::all();

        return $tickets;

        
    }

    public function find_ticket($id){

        $ticket = Ticket::find($id);

        return $ticket;

        
    }

    public function user_tickets($id){

        $query = Ticket::where('user_id','=',$id)->get();
        return $query;
  
    }

    public function all_user_tickets(){

        $query = Ticket::join('users', 'user_id', '=', 'users.id')->get();
        return $query;
  
    }

    public function update_ticket(Request $request)
    {
        $request->validate([
            'user_id'     => ['required'],
            'issue'       => ['required'],
            'status'      => ['required']           
        ]);

        $ticket = Ticket::find($request->id);
        $ticket->user_id= $request->user_id;
        $ticket->issue= $request->issue;
        $ticket->status= $request->status;

        $ticket->save();

        return response()->json([
            'message' => 'Successfully updated ticket!'], 201);

        
    }

    public function update_status(Request $request)
    {
        $request->validate([
            'status'      => ['required']           
        ]);

        $ticket = Ticket::find($request->id);
        $ticket->status= $request->status;
        $ticket->save();

        return response()->json([
            'message' => 'Successfully updated status!'], 201);
 
    }

    public function delete($id)
    {
        $user = Ticket::find($id);
        $user->delete();
        return response()->json([
            'message' => 'Successfully deleted status!'], 201);
        
    }



    
    
}
