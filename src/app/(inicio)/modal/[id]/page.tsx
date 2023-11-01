"use client"
import Modal from "@/components/reutilizables/modal";

export default function PageModal({ params }: { params: { id: string } }){
    
    return(
        <Modal id={params.id}></Modal>
    );
};