import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertInquirySchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
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
import { apiRequest } from "@/lib/queryClient";
import type { z } from "zod";

type InquiryFormData = z.infer<typeof insertInquirySchema>;

export default function InquiryForm() {
  const { toast } = useToast();

  const form = useForm<InquiryFormData>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      type: "",
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const createInquiryMutation = useMutation({
    mutationFn: async (data: InquiryFormData) => {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("문의 전송에 실패했습니다");
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "문의가 전송되었습니다",
        description: "빠른 시일 내에 답변드리겠습니다.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "오류가 발생했습니다",
        description: error instanceof Error ? error.message : "문의 전송에 실패했습니다.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: InquiryFormData) => {
    createInquiryMutation.mutate(data);
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
                  <Input placeholder="010-1234-5678" {...field} value={field.value || ""} data-testid="input-phone" />
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
          disabled={createInquiryMutation.isPending}
          data-testid="button-submit-inquiry"
        >
          {createInquiryMutation.isPending ? "전송 중..." : "문의하기"}
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </Form>
  );
}
