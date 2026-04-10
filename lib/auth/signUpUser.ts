import { supabase } from "../SupabaseClient";



const sigbUpUser = async (name:string,email:string,password:string) => {
    try{
        const{} = await supabase.auth.signUp

    }catch (err){
            console.log("Unexpected Error:",err);
            return {error: "Something went wrong"}

    }
}