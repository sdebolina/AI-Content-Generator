"use client"
import React, { useContext, useState } from 'react'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import FormSection from '../_components/FormSection'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { chatSession } from '@/utils/AiModal'
import { aiOutput } from '@/utils/schema'
import { db } from '@/utils/db'
import { useUser } from '@clerk/clerk-react'
import moment from "moment";
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsage'

interface PROPS {
  params: {
    'template-slug': string
  }
}
function CreateNewContent(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug == props.params['template-slug']);
  const [loading, setLoading] = useState(false);
  const [AIOutput, setAiOutput] = useState<string | undefined>(undefined);
  const { user } = useUser();
  const router = useRouter();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { UpdateCreditUsage, setUpdateCreditUsage } = useContext(UpdateCreditUsageContext)

  /**
   * Used to generate content from AI
   * @param formData 
   * @returns 
   */

  const GenerateAIContent = async (formData: any) => {
    if (totalUsage >= 10000) {
      console.log("Please Upgrade")
      router.push('/dashboard/billing')
      return;
    }
    setLoading(true);
    const SelectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAiPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;
    const result = await chatSession.sendMessage(FinalAiPrompt);

    // console.log(result.response.text());
    setAiOutput(result.response.text());

    await SaveInDb(formData, selectedTemplate?.slug, result.response.text());
    setLoading(false);

    setUpdateCreditUsage(Date.now())

  }
  const SaveInDb = async (formData: any, slug: any, AIResp: string) => {
    const result = await db.insert(aiOutput).values({
      formData: formData,
      templateSlug: slug,
      AIResponse: AIResp,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format('DD/MM/YYYY'),

    });
    console.log(result);
  }

  return (
    <div className='p-10'>
      <Link href={"/dashboard"}>
        <Button> <ArrowLeft /> Back </Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading} />
        <div className='col-span-2'>
          <OutputSection AiOutput={AIOutput} />
        </div>

      </div>
    </div>
  )
}

export default CreateNewContent  