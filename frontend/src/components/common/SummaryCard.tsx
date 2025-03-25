import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type Props = {
  title: string;
  key: string;
  value: number | string;
  icon: React.ReactNode;
};

export default function SummaryCard({ title, key, value, icon }: Props) {
  return (
    <Card key={key}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-left ml-6">{value} </p>
      </CardContent>
    </Card>
  );
}
