"use client"
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image';
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';

interface PROPS {
    selectedTemplate?: TEMPLATE,
    userFormInput:any,
    loading:boolean
}

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {
    // Initialize formData as an empty object
    const [formData, setFormData] = useState<{ [key: string]: any }>({});

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        userFormInput(formData)
    };

    return (
        <div className='p-5 shadow-lg border rounded-lg bg-white'>
            {/* @ts-ignore*/}
            <Image src={selectedTemplate?.icon} alt='icon' width={70} height={70} />
            <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
            <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>

            <form className='mt-6' onSubmit={onSubmit}>
                {selectedTemplate?.form?.map((item, index) => (
                    <div key={index} className='my-2 flex flex-col gap-2 mb-7'>
                        <label className='font-bold'>
                            {item.label}
                        </label>
                        {item.field === 'input' ?
                            <Input name={item.name} required={item?.required}
                                onChange={handleInputChange} />
                            : item.field === 'textarea' ?
                                <Textarea name={item.name} required={item?.required}
                                    onChange={handleInputChange} /> : null
                        }
                    </div>
                ))}
                <Button type="submit" 
                className='w-full py-6 bg-gradient-to-tr from-[#FF597B] to-[#6C22A6]' 
                disabled={loading}> 
                {loading&&<Loader2Icon className='animate-spin'/>}
                Generate
                 </Button>
            </form>
        </div>
    );
}

export default FormSection;