import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";

const inquiryFormSchema = z.object({
  type: z.string().min(1, "문의 유형을 선택해주세요"),
  name: z.string().min(2, "이름을 입력해주세요"),
  email: z.string().email("올바른 이메일을 입력해주세요"),
  phone: z.string().optional(),
  subject: z.string().min(2, "제목을 입력해주세요"),
  message: z.string().min(10, "내용을 10자 이상 입력해주세요"),
});

type InquiryFormData = z.infer<typeof inquiryFormSchema>;

export default function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InquiryFormData>({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues: {
      type: "",
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);
    console.log("Form submitted:", data);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert("문의가 성공적으로 전송되었습니다!");
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>문의 유형</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger data-testid="select-inquiry-type">
                    <SelectValue placeholder="문의 유형을 선택하세요" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="general">일반 문의</SelectItem>
                  <SelectItem value="support">후원 문의</SelectItem>
                  <SelectItem value="instructor">강사 문의</SelectItem>
                  <SelectItem value="education">교육 프로그램 문의</SelectItem>
                  <SelectItem value="membership">조합원 가입 문의</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이름</FormLabel>
                <FormControl>
                  <Input placeholder="홍길동" {...field} data-testid="input-name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>연락처 (선택)</FormLabel>
                <FormControl>
                  <Input placeholder="010-1234-5678" {...field} data-testid="input-phone" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <Input type="email" placeholder="example@email.com" {...field} data-testid="input-email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>제목</FormLabel>
              <FormControl>
                <Input placeholder="문의 제목을 입력하세요" {...field} data-testid="input-subject" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>내용</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="문의 내용을 자세히 입력해주세요"
                  className="min-h-[150px] resize-none"
                  {...field}
                  data-testid="input-message"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          size="lg" 
          className="w-full gap-2"
          disabled={isSubmitting}
          data-testid="button-submit-inquiry"
        >
          {isSubmitting ? "전송 중..." : "문의하기"}
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </Form>
  );
}
