import * as mockData from './mockData';

const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true';
const API_BASE = import.meta.env.VITE_API_BASE || 'https://script.google.com/macros/s/AKfycbyfmemkEGxuQiDwTEGQzS6IsyzUEl1PtO-zX4_Ml9hYi5Hn0OcCBm7U5iyIed37XHTI/exec';

let mockStorage: Record<string, any[]> = {};

export const fetchSheet = async (sheetName: string, email?: string) => {
  if (USE_MOCK) {
    await new Promise(resolve => setTimeout(resolve, 300));
    const key = sheetName.toLowerCase();
    let data = (mockData as any)[mock\] || [];
    if (email) data = data.filter((item: any) => item.email === email);
    return data;
  } else {
    const url = new URL(API_BASE);
    url.searchParams.set('sheet', sheetName);
    if (email) url.searchParams.set('email', email);
    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(API error: \);
    return res.json();
  }
};

export const postData = async (sheet: string, data: any) => {
  if (USE_MOCK) {
    await new Promise(resolve => setTimeout(resolve, 300));
    const newEntry = { ...data, id: Date.now().toString() };
    if (!mockStorage[sheet]) mockStorage[sheet] = [];
    mockStorage[sheet].push(newEntry);
    return { success: true, ...newEntry };
  } else {
    const res = await fetch(API_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sheet, data })
    });
    return res.json();
  }
};
