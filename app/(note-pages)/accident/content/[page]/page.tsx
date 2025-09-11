"use client"
import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

// Import all chapter page components
import AMChapterPage1A from '@/components/acc-manual/am-chapter-pages/AMChapterPage1A'
import AMChapterPage1B from '@/components/acc-manual/am-chapter-pages/AMChapterPage1B'
import AMChapterPage1C from '@/components/acc-manual/am-chapter-pages/AMChapterPage1C'
import AMChapterPage1D from '@/components/acc-manual/am-chapter-pages/AMChapterPage1D'
import AMChapterPage1E from '@/components/acc-manual/am-chapter-pages/AMChapterPage1E'
import AMChapterPage2A from '@/components/acc-manual/am-chapter-pages/AMChapterPage2A'
import AMChapterPage2B from '@/components/acc-manual/am-chapter-pages/AMChapterPage2B'
import AMChapterPage2C from '@/components/acc-manual/am-chapter-pages/AMChapterPage2C'
import AMChapterPage2D from '@/components/acc-manual/am-chapter-pages/AMChapterPage2D'
import AMChapterPage2E from '@/components/acc-manual/am-chapter-pages/AMChapterPage2E'
import AMChapterPage2F from '@/components/acc-manual/am-chapter-pages/AMChapterPage2F'
import AMChapterPage2G from '@/components/acc-manual/am-chapter-pages/AMChapterPage2G'
import AMChapterPage3A from '@/components/acc-manual/am-chapter-pages/AMChapterPage3A'
import AMChapterPage3B from '@/components/acc-manual/am-chapter-pages/AMChapterPage3B'
import AMChapterPage3C from '@/components/acc-manual/am-chapter-pages/AMChapterPage3C'
import AMChapterPage3D from '@/components/acc-manual/am-chapter-pages/AMChapterPage3D'
import AMChapterPage3E from '@/components/acc-manual/am-chapter-pages/AMChapterPage3E'
import AMChapterPage3F from '@/components/acc-manual/am-chapter-pages/AMChapterPage3F'
import AMChapterPage3G from '@/components/acc-manual/am-chapter-pages/AMChapterPage3G'
import AMChapterPage3H from '@/components/acc-manual/am-chapter-pages/AMChapterPage3H'
import AMChapterPage4A from '@/components/acc-manual/am-chapter-pages/AMChapterPage4A'
import AMChapterPage4B from '@/components/acc-manual/am-chapter-pages/AMChapterPage4B'
import AMChapterPage4C from '@/components/acc-manual/am-chapter-pages/AMChapterPage4C'
import AMChapterPage4D from '@/components/acc-manual/am-chapter-pages/AMChapterPage4D'
import AMChapterPage4E from '@/components/acc-manual/am-chapter-pages/AMChapterPage4E'
import AMChapterPage4F from '@/components/acc-manual/am-chapter-pages/AMChapterPage4F'
import AMChapterPage4G from '@/components/acc-manual/am-chapter-pages/AMChapterPage4G'
import AMChapterPage4H from '@/components/acc-manual/am-chapter-pages/AMChapterPage4H'
import AMChapterPage4I from '@/components/acc-manual/am-chapter-pages/AMChapterPage4I'
import AMChapterPage5 from '@/components/acc-manual/am-chapter-pages/AMChapterPage5'
import AMChapterPage6A from '@/components/acc-manual/am-chapter-pages/AMChapterPage6A'
import AMChapterPage6B from '@/components/acc-manual/am-chapter-pages/AMChapterPage6B'
import AMChapterPage6C from '@/components/acc-manual/am-chapter-pages/AMChapterPage6C'
import AMChapterPage6D from '@/components/acc-manual/am-chapter-pages/AMChapterPage6D'
import AMChapterPage6E from '@/components/acc-manual/am-chapter-pages/AMChapterPage6E'
import AMChapterPage6F from '@/components/acc-manual/am-chapter-pages/AMChapterPage6F'
import AMChapterPage7A from '@/components/acc-manual/am-chapter-pages/AMChapterPage7A'
import AMChapterPage7B from '@/components/acc-manual/am-chapter-pages/AMChapterPage7B'
import AMChapterPage7C from '@/components/acc-manual/am-chapter-pages/AMChapterPage7C'
import AMChapterPage7D from '@/components/acc-manual/am-chapter-pages/AMChapterPage7D'
import AMChapterPage7E from '@/components/acc-manual/am-chapter-pages/AMChapterPage7E'
import AMChapterPage7F from '@/components/acc-manual/am-chapter-pages/AMChapterPage7F'
import AMChapterPage8A from '@/components/acc-manual/am-chapter-pages/AMChapterPage8A'
import AMChapterPage8B from '@/components/acc-manual/am-chapter-pages/AMChapterPage8B'
import AMChapterPage8C from '@/components/acc-manual/am-chapter-pages/AMChapterPage8C'
import AMChapterPage9 from '@/components/acc-manual/am-chapter-pages/AMChapterPage9'
import AMChapterPage11A from '@/components/acc-manual/am-chapter-pages/AMChapterPage11A'
import AMChapterPage11B from '@/components/acc-manual/am-chapter-pages/AMChapterPage11B'
import AMChapterPage12 from '@/components/acc-manual/am-chapter-pages/AMChapterPage12'
import AMChapterPage14A from '@/components/acc-manual/am-chapter-pages/AMChapterPage14A'
import AMChapterPage14B from '@/components/acc-manual/am-chapter-pages/AMChapterPage14B'
import AMChapterPage14C from '@/components/acc-manual/am-chapter-pages/AMChapterPage14C'
import AMChapterPage16A from '@/components/acc-manual/am-chapter-pages/AMChapterPage16A'
import AMChapterPage16B from '@/components/acc-manual/am-chapter-pages/AMChapterPage16B'
import AMChapterPage16C from '@/components/acc-manual/am-chapter-pages/AMChapterPage16C'
import AMChapterPage18A from '@/components/acc-manual/am-chapter-pages/AMChapterPage18A'
import AMChapterPage18B from '@/components/acc-manual/am-chapter-pages/AMChapterPage18B'
import AMChapterPage19A from '@/components/acc-manual/am-chapter-pages/AMChapterPage19A'
import AMChapterPage19B from '@/components/acc-manual/am-chapter-pages/AMChapterPage19B'
import AMChapterPage20A from '@/components/acc-manual/am-chapter-pages/AMChapterPage20A'
import AMChapterPage20B from '@/components/acc-manual/am-chapter-pages/AMChapterPage20B'
import AMChapterPage21 from '@/components/acc-manual/am-chapter-pages/AMChapterPage21'
import AMChapterPage22 from '@/components/acc-manual/am-chapter-pages/AMChapterPage22'
import AMChapterPage23 from '@/components/acc-manual/am-chapter-pages/AMChapterPage23'
import AMChapterPage24A from '@/components/acc-manual/am-chapter-pages/AMChapterPage24A'
import AMChapterPage24B from '@/components/acc-manual/am-chapter-pages/AMChapterPage24B'
import AMChapterPage25A from '@/components/acc-manual/am-chapter-pages/AMChapterPage25A'
import AMChapterPage25B from '@/components/acc-manual/am-chapter-pages/AMChapterPage25B'
import AMChapterPage25C from '@/components/acc-manual/am-chapter-pages/AMChapterPage25C'
import AMChapterPage26A from '@/components/acc-manual/am-chapter-pages/AMChapterPage26A'
import AMChapterPage26B from '@/components/acc-manual/am-chapter-pages/AMChapterPage26B'
import AMChapterPage26C from '@/components/acc-manual/am-chapter-pages/AMChapterPage26C'
import AMChapterPage26D from '@/components/acc-manual/am-chapter-pages/AMChapterPage26D'
import AMChapterPage26E from '@/components/acc-manual/am-chapter-pages/AMChapterPage26E'
import AMChapterPage27A from '@/components/acc-manual/am-chapter-pages/AMChapterPage27A'
import AMChapterPage27B from '@/components/acc-manual/am-chapter-pages/AMChapterPage27B'
import AMChapterPage28A from '@/components/acc-manual/am-chapter-pages/AMChapterPage28A'
import AMChapterPage28B from '@/components/acc-manual/am-chapter-pages/AMChapterPage28B'
import AMChapterPage30 from '@/components/acc-manual/am-chapter-pages/AMChapterPage30'
import AMChapterPage34A from '@/components/acc-manual/am-chapter-pages/AMChapterPage34A'
import AMChapterPage34B from '@/components/acc-manual/am-chapter-pages/AMChapterPage34B'
import AMChapterPage34C from '@/components/acc-manual/am-chapter-pages/AMChapterPage34C'
import AMChapterPage34D from '@/components/acc-manual/am-chapter-pages/AMChapterPage34D'
import AMChapterPage35 from '@/components/acc-manual/am-chapter-pages/AMChapterPage35'
import AMChapterPage37 from '@/components/acc-manual/am-chapter-pages/AMChapterPage37'
import AMChapterPage38A from '@/components/acc-manual/am-chapter-pages/AMChapterPage38A'
import AMChapterPage38B from '@/components/acc-manual/am-chapter-pages/AMChapterPage38B'
import AMChapterPage39A from '@/components/acc-manual/am-chapter-pages/AMChapterPage39A'
import AMChapterPage39B from '@/components/acc-manual/am-chapter-pages/AMChapterPage39B'
import AMChapterPage39C from '@/components/acc-manual/am-chapter-pages/AMChapterPage39C'
import AMChapterPage39D from '@/components/acc-manual/am-chapter-pages/AMChapterPage39D'
import AMChapterPage39E from '@/components/acc-manual/am-chapter-pages/AMChapterPage39E'
import AMChapterPage39F from '@/components/acc-manual/am-chapter-pages/AMChapterPage39F'
import AMChapterPage39G from '@/components/acc-manual/am-chapter-pages/AMChapterPage39G'
import AMChapterPage39H from '@/components/acc-manual/am-chapter-pages/AMChapterPage39H'
import AMChapterPage40 from '@/components/acc-manual/am-chapter-pages/AMChapterPage40'
import AMChapterPage41A from '@/components/acc-manual/am-chapter-pages/AMChapterPage41A'
import AMChapterPage41B from '@/components/acc-manual/am-chapter-pages/AMChapterPage41B'
import AMChapterPage42 from '@/components/acc-manual/am-chapter-pages/AMChapterPage42'
import AMChapterPage45 from '@/components/acc-manual/am-chapter-pages/AMChapterPage45'
import AMChapterPage49A from '@/components/acc-manual/am-chapter-pages/AMChapterPage49A'
import AMChapterPage49B from '@/components/acc-manual/am-chapter-pages/AMChapterPage49B'
import AMChapterPage50 from '@/components/acc-manual/am-chapter-pages/AMChapterPage50'
import AMChapterPage54 from '@/components/acc-manual/am-chapter-pages/AMChapterPage54'
import AMChapterPage58 from '@/components/acc-manual/am-chapter-pages/AMChapterPage58'
import AMChapterPage61 from '@/components/acc-manual/am-chapter-pages/AMChapterPage61'
import AMChapterPage62A from '@/components/acc-manual/am-chapter-pages/AMChapterPage62A'
import AMChapterPage63A from '@/components/acc-manual/am-chapter-pages/AMChapterPage63A'
import AMChapterPage63B from '@/components/acc-manual/am-chapter-pages/AMChapterPage63B'
import AMChapterPage64 from '@/components/acc-manual/am-chapter-pages/AMChapterPage64'
import AMChapterPage68 from '@/components/acc-manual/am-chapter-pages/AMChapterPage68'
import AMChapterPage71 from '@/components/acc-manual/am-chapter-pages/AMChapterPage71'
import AMChapterPage75A from '@/components/acc-manual/am-chapter-pages/AMChapterPage75A'
import AMChapterPage75B from '@/components/acc-manual/am-chapter-pages/AMChapterPage75B'
import AMChapterPage75C from '@/components/acc-manual/am-chapter-pages/AMChapterPage75C'
import AMChapterPage76A from '@/components/acc-manual/am-chapter-pages/AMChapterPage76A'
import AMChapterPage76B from '@/components/acc-manual/am-chapter-pages/AMChapterPage76B'
import AMChapterPage76C from '@/components/acc-manual/am-chapter-pages/AMChapterPage76C'
import AMChapterPage77A from '@/components/acc-manual/am-chapter-pages/AMChapterPage77A'
import AMChapterPage77B from '@/components/acc-manual/am-chapter-pages/AMChapterPage77B'
import AMChapterPage77C from '@/components/acc-manual/am-chapter-pages/AMChapterPage77C'
import AMChapterPage78A from '@/components/acc-manual/am-chapter-pages/AMChapterPage78A'
import AMChapterPage78B from '@/components/acc-manual/am-chapter-pages/AMChapterPage78B'
import AMChapterPage78C from '@/components/acc-manual/am-chapter-pages/AMChapterPage78C'
import AMChapterPage79 from '@/components/acc-manual/am-chapter-pages/AMChapterPage79'
import AMChapterPage80 from '@/components/acc-manual/am-chapter-pages/AMChapterPage80'
import AMChapterPage84A from '@/components/acc-manual/am-chapter-pages/AMChapterPage84A'
import AMChapterPage84B from '@/components/acc-manual/am-chapter-pages/AMChapterPage84B'
import AMChapterPage85A from '@/components/acc-manual/am-chapter-pages/AMChapterPage85A'
import AMChapterPage85B from '@/components/acc-manual/am-chapter-pages/AMChapterPage85B'
import AMChapterPage85C from '@/components/acc-manual/am-chapter-pages/AMChapterPage85C'
import AMChapterPage87A from '@/components/acc-manual/am-chapter-pages/AMChapterPage87A'
import AMChapterPage87B from '@/components/acc-manual/am-chapter-pages/AMChapterPage87B'
import AMChapterPage87C from '@/components/acc-manual/am-chapter-pages/AMChapterPage87C'
import AMChapterPage90 from '@/components/acc-manual/am-chapter-pages/AMChapterPage90'
import AMChapterPage92 from '@/components/acc-manual/am-chapter-pages/AMChapterPage92'
import AMChapterPage93 from '@/components/acc-manual/am-chapter-pages/AMChapterPage93'
import AMChapterPage94A from '@/components/acc-manual/am-chapter-pages/AMChapterPage94A'
import AMChapterPage94B from '@/components/acc-manual/am-chapter-pages/AMChapterPage94B'
import AMChpaterPage99A from '@/components/acc-manual/am-chapter-pages/AMChapterPage99A'
import AMChpaterPage99B from '@/components/acc-manual/am-chapter-pages/AMChpaterPage99B'
import AMChpaterPage101A from '@/components/acc-manual/am-chapter-pages/AMChpaterPage101A'
import AMChapaterPage101B from '@/components/acc-manual/am-chapter-pages/AMChapaterPage101B'
import AMChapaterPage102 from '@/components/acc-manual/am-chapter-pages/AMChapaterPage102'
import AMChapaterPage103A from '@/components/acc-manual/am-chapter-pages/AMChapaterPage103A'
import AMChapaterPage103B from '@/components/acc-manual/am-chapter-pages/AMChapaterPage103B'
import AMChapaterPage104A from '@/components/acc-manual/am-chapter-pages/AMChapaterPage104A'
import AMChapaterPage104B from '@/components/acc-manual/am-chapter-pages/AMChapaterPage104B'
import AMChapaterPage104C from '@/components/acc-manual/am-chapter-pages/AMChapaterPage104C'
import AMChapaterPage104D from '@/components/acc-manual/am-chapter-pages/AMChapaterPage104D'
import AMChapaterPage105 from '@/components/acc-manual/am-chapter-pages/AMChapaterPage105'
import AMChapaterPage106A from '@/components/acc-manual/am-chapter-pages/AMChapaterPage106A'
import AMChapaterPage106B from '@/components/acc-manual/am-chapter-pages/AMChapaterPage106B'
import AMChapaterPage106C from '@/components/acc-manual/am-chapter-pages/AMChapaterPage106C'
import AMChapaterPage106D from '@/components/acc-manual/am-chapter-pages/AMChapaterPage106D'
import AMChapaterPage106E from '@/components/acc-manual/am-chapter-pages/AMChapaterPage106E'
import AMChapaterPage107 from '@/components/acc-manual/am-chapter-pages/AMChapaterPage107'
import AMChapaterPage108A from '@/components/acc-manual/am-chapter-pages/AMChapaterPage108A'
import AMChapaterPage108B from '@/components/acc-manual/am-chapter-pages/AMChapaterPage108B'
import AMChapaterPage108C from '@/components/acc-manual/am-chapter-pages/AMChapaterPage108C'
import AMChapaterPage109A from '@/components/acc-manual/am-chapter-pages/AMChapaterPage109A'
import AMChapaterPage109B from '@/components/acc-manual/am-chapter-pages/AMChapaterPage109B'
import AMChapaterPage109C from '@/components/acc-manual/am-chapter-pages/AMChapaterPage109C'
import AMChapaterPage109D from '@/components/acc-manual/am-chapter-pages/AMChapaterPage109D'
import AMChapaterPage109E from '@/components/acc-manual/am-chapter-pages/AMChapaterPage109E'
import AMChapaterPage110 from '@/components/acc-manual/am-chapter-pages/AMChapaterPage110'
import AMChapaterPage113A from '@/components/acc-manual/am-chapter-pages/AMChapaterPage113A'
import AMChapaterPage113B from '@/components/acc-manual/am-chapter-pages/AMChapaterPage113B'
import AMChapaterPage114A from '@/components/acc-manual/am-chapter-pages/AMChapaterPage114A'
import AMChapaterPage114B from '@/components/acc-manual/am-chapter-pages/AMChapaterPage114B'
import AMChapaterPage115A from '@/components/acc-manual/am-chapter-pages/AMChapaterPage115A'
import AMChapaterPage115B from '@/components/acc-manual/am-chapter-pages/AMChapaterPage115B'
import AMChapaterPage115C from '@/components/acc-manual/am-chapter-pages/AMChapaterPage115C'
import AMChapaterPage116A from '@/components/acc-manual/am-chapter-pages/AMChapaterPage116A'
import AMChapaterPage116B from '@/components/acc-manual/am-chapter-pages/AMChapaterPage116B'
import AMChapaterPage116C from '@/components/acc-manual/am-chapter-pages/AMChapaterPage116C'
import AMChapaterPage117A from '@/components/acc-manual/am-chapter-pages/AMChapaterPage117A'
import AMChapaterPage117B from '@/components/acc-manual/am-chapter-pages/AMChapaterPage117B'
import AMChapaterPage118A from '@/components/acc-manual/am-chapter-pages/AMChapaterPage118A'
import AMChapaterPage118B from '@/components/acc-manual/am-chapter-pages/AMChapaterPage118B'
import AMChapaterPage118C from '@/components/acc-manual/am-chapter-pages/AMChapaterPage118C'
import AMChapaterPage118D from '@/components/acc-manual/am-chapter-pages/AMChapaterPage118D'
import AMChapaterPage119A from '@/components/acc-manual/am-chapter-pages/AMChapaterPage119A'
import AMChapaterPage119B from '@/components/acc-manual/am-chapter-pages/AMChapaterPage119B'
import AMChapaterPage119C from '@/components/acc-manual/am-chapter-pages/AMChapaterPage119C'
import AMChapaterPage119D from '@/components/acc-manual/am-chapter-pages/AMChapaterPage119D'
import AMChapaterPage119E from '@/components/acc-manual/am-chapter-pages/AMChapaterPage119E'
import AMChapaterPage120 from '@/components/acc-manual/am-chapter-pages/AMChapaterPage120'
import AMChapaterPage121A from '@/components/acc-manual/am-chapter-pages/AMChapaterPage121A'
import AMChapaterPage121B from '@/components/acc-manual/am-chapter-pages/AMChapaterPage121B'
import AMChapaterPage121C from '@/components/acc-manual/am-chapter-pages/AMChapaterPage121C'
import AMChapaterPage122A from '@/components/acc-manual/am-chapter-pages/AMChapaterPage122A'
import AMChapaterPage122B from '@/components/acc-manual/am-chapter-pages/AMChapaterPage122B'
import AMChapaterPage122C from '@/components/acc-manual/am-chapter-pages/AMChapaterPage122C'
import AMChapaterPage123A from '@/components/acc-manual/am-chapter-pages/AMChapaterPage123A'
import AMChapaterPage123B from '@/components/acc-manual/am-chapter-pages/AMChapaterPage123B'
import AMChapaterPage123C from '@/components/acc-manual/am-chapter-pages/AMChapaterPage123C'
import AMChapaterPage123D from '@/components/acc-manual/am-chapter-pages/AMChapaterPage123D'
import AMChapaterPage123E from '@/components/acc-manual/am-chapter-pages/AMChapaterPage123E'
import AMChapaterPage123F from '@/components/acc-manual/am-chapter-pages/AMChapaterPage123F'
import AMChapaterPage124 from '@/components/acc-manual/am-chapter-pages/AMChapaterPage124'
import AMChapaterPage125A from '@/components/acc-manual/am-chapter-pages/AMChapaterPage125A'
import AMChapaterPage125B from '@/components/acc-manual/am-chapter-pages/AMChapaterPage125B'
import AMChapaterPage126 from '@/components/acc-manual/am-chapter-pages/AMChapaterPage126'
import AMChapaterPage127A from '@/components/acc-manual/am-chapter-pages/AMChapaterPage127A'
import AMChapaterPage127B from '@/components/acc-manual/am-chapter-pages/AMChapaterPage127B'
import AMChapaterPage127C from '@/components/acc-manual/am-chapter-pages/AMChapaterPage127C'
import AMChapaterPage128A from '@/components/acc-manual/am-chapter-pages/AMChapaterPage128A'
import AMChapaterPage128B from '@/components/acc-manual/am-chapter-pages/AMChapaterPage128B'
import AMChapaterPage128C from '@/components/acc-manual/am-chapter-pages/AMChapaterPage128C'
import AMChapaterPage128D from '@/components/acc-manual/am-chapter-pages/AMChapaterPage128D'
import AMChapaterPage129A from '@/components/acc-manual/am-chapter-pages/AMChapaterPage129A'
import AMChapaterPage129B from '@/components/acc-manual/am-chapter-pages/AMChapaterPage129B'
import AMChapaterPage130A from '@/components/acc-manual/am-chapter-pages/AMChapaterPage130A'
import AMChapaterPage130B from '@/components/acc-manual/am-chapter-pages/AMChapaterPage130B'
import AMChapaterPage131A from '@/components/acc-manual/am-chapter-pages/AMChapaterPage131A'
import AMChapaterPage131B from '@/components/acc-manual/am-chapter-pages/AMChapaterPage131B'
import AMChapaterPage131C from '@/components/acc-manual/am-chapter-pages/AMChapaterPage131C'
import AMChapaterPage131D from '@/components/acc-manual/am-chapter-pages/AMChapaterPage131D'
import AMChapaterPage131E from '@/components/acc-manual/am-chapter-pages/AMChapaterPage131E'
import AMChapaterPage132A from '@/components/acc-manual/am-chapter-pages/AMChapaterPage132A'
import AMChapaterPage132B from '@/components/acc-manual/am-chapter-pages/AMChapaterPage132B'
import AMChapaterPage132C from '@/components/acc-manual/am-chapter-pages/AMChapaterPage132C'
import AMChapaterPage133A from '@/components/acc-manual/am-chapter-pages/AMChapaterPage133A'
import AMChapaterPage133B from '@/components/acc-manual/am-chapter-pages/AMChapaterPage133B'
import AMChapaterPage133C from '@/components/acc-manual/am-chapter-pages/AMChapaterPage133C'
import AMChapaterPage134A from '@/components/acc-manual/am-chapter-pages/AMChapaterPage134A'
import AMChapaterPage134B from '@/components/acc-manual/am-chapter-pages/AMChapaterPage134B'

// Import all appendix page components
import AMAppendixPage135A from '@/components/acc-manual/am-appendix-pages/AMAppendixPage135A'
import AMAppendixPage135B from '@/components/acc-manual/am-appendix-pages/AMAppendixPage135B'
import AMAppendixPage136 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage136'
import AMAppendixPage137A from '@/components/acc-manual/am-appendix-pages/AMAppendixPage137A'
import AMAppendixPage137B from '@/components/acc-manual/am-appendix-pages/AMAppendixPage137B'
import AMAppendixPage138 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage138'
import AMAppendixPage139A from '@/components/acc-manual/am-appendix-pages/AMAppendixPage139A'
import AMAppendixPage139B from '@/components/acc-manual/am-appendix-pages/AMAppendixPage139B'
import AMAppendixPage139C from '@/components/acc-manual/am-appendix-pages/AMAppendixPage139C'
import AMAppendixPage140 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage140'
import AMAppendixPage141 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage141'
import AMAppendixPage142 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage142'
import AMAppendixPage143 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage143'
import AMAppendixPage145A from '@/components/acc-manual/am-appendix-pages/AMAppendixPage145A'
import AMAppendixPage145B from '@/components/acc-manual/am-appendix-pages/AMAppendixPage145B'
import AMAppendixPage146A from '@/components/acc-manual/am-appendix-pages/AMAppendixPage146A'
import AMAppendixPage146B from '@/components/acc-manual/am-appendix-pages/AMAppendixPage146B'
import AMAppendixPage147A from '@/components/acc-manual/am-appendix-pages/AMAppendixPage147A'
import AMAppendixPage147B from '@/components/acc-manual/am-appendix-pages/AMAppendixPage147B'
import AMAppendixPage148A from '@/components/acc-manual/am-appendix-pages/AMAppendixPage148A'
import AMAppendixPage148B from '@/components/acc-manual/am-appendix-pages/AMAppendixPage148B'
import AMAppendixPage149A from '@/components/acc-manual/am-appendix-pages/AMAppendixPage149A'
import AMAppendixPage149B from '@/components/acc-manual/am-appendix-pages/AMAppendixPage149B'
import AMAppendixPage151 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage151'
import AMAppendixPage153 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage153'
import AMAppendixPage156 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage156'
import AMAppendixPage156B from '@/components/acc-manual/am-appendix-pages/AMAppendixPage156B'
import AMAppendixPage156C from '@/components/acc-manual/am-appendix-pages/AMAppendixPage156C'
import AMAppendixPage157 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage157'
import AMAppendixPage160 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage160'
import AMAppendixPage161A from '@/components/acc-manual/am-appendix-pages/AMAppendixPage161A'
import AMAppendixPage161B from '@/components/acc-manual/am-appendix-pages/AMAppendixPage161B'
import AMAppendixPage162 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage162'
import AMAppendixPage163 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage163'
import AMAppendixPage168 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage168'
import AMAppendixPage169 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage169'
import AMAppendixPage171 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage171'
import AMAppendixPage174 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage174'
import AMAppendixPage175 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage175'
import AMAppendixPage176 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage176'
import AMAppendixPage177 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage177'
import AMAppendixPage178 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage178'
import AMAppendixPage179 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage179'
import AMAppendixPage180 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage180'
import AMAppendixPage181 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage181'
import AMAppendixPage183 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage183'
import AMAppendixPage185 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage185'
import AMAppendixPage186 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage186'
import AMAppendixPage188 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage188'
import AMAppendixPage188B from '@/components/acc-manual/am-appendix-pages/AMAppendixPage188B'
import AMAppendixPage189 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage189'
import AMAppendixPage190 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage190'
import AMAppendixPage190A from '@/components/acc-manual/am-appendix-pages/AMAppendixPage190A'
import AMAppendixPage190B from '@/components/acc-manual/am-appendix-pages/AMAppendixPage190B'
import AMAppendixPage191 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage191'
import AMAppendixPage192 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage192'
import AMAppendixPage193 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage193'
import AMAppendixPage194 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage194'
import AMAppendixPage195 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage195'
import AMAppendixPage196 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage196'
import AMAppendixPage197 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage197'
import AMAppendixPage198 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage198'
import AMAppendixPage199 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage199'
import AMAppendixPage200 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage200'
import AMAppendixPage201 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage201'
import AMAppendixPage202 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage202'
import AMAppendixPage203 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage203'
import AMAppendixPage204 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage204'
import AMAppendixPage205A from '@/components/acc-manual/am-appendix-pages/AMAppendixPage205A'
import AMAppendixPage205B from '@/components/acc-manual/am-appendix-pages/AMAppendixPage205B'
import AMAppendixPage205C from '@/components/acc-manual/am-appendix-pages/AMAppendixPage205C'
import AMAppendixPage206 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage206'
import AMAppendixPage207 from '@/components/acc-manual/am-appendix-pages/AMAppendixPage207'
import AMAppendixPage208A from '@/components/acc-manual/am-appendix-pages/AMAppendixPage208A'
import AMAppendixPage208B from '@/components/acc-manual/am-appendix-pages/AMAppendixPage208B'

const ContentPage = () => {
  const params = useParams()
  const router = useRouter()
  const pageNumber = params.page as string
  const [isLoading, setIsLoading] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    setIsLoading(false)
  }, [pageNumber])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Map page numbers to topics
  // Get all available pages in order for navigation
  const getAllAvailablePages = (): string[] => {
    return Object.keys(chapterComponents).concat(Object.keys(appendixComponents))
  }

  // Get previous page in the sequence
  const getPreviousPage = (currentPage: string): string | null => {
    const allPages = getAllAvailablePages()
    const currentIndex = allPages.indexOf(currentPage)
    if (currentIndex > 0) {
      return allPages[currentIndex - 1]
    }
    return null
  }

  // Get next page in the sequence
  const getNextPage = (currentPage: string): string | null => {
    const allPages = getAllAvailablePages()
    const currentIndex = allPages.indexOf(currentPage)
    if (currentIndex < allPages.length - 1 && currentIndex !== -1) {
      return allPages[currentIndex + 1]
    }
    return null
  }

  const getTopicForPage = (page: string): string => {
    const pageToTopicMap: { [key: string]: string } = {
      // Chapter 1
      '1A': 'Train',
      '1B': 'Passenger Train',
      '1C': 'Other Trains',
      '1D': 'Accident',
      '1E': 'Serious Accident',
      // Chapter 2
      '2A': 'Injuries',
      '2B': 'Grievous Injuries',
      '2C': 'Simple Injuries',
      '2D': 'Classification of Accidents',
      '2E': 'Train Accident',
      '2F': 'Consequential train accidents',
      '2G': 'Collisions',
      // Chapter 3
      '3A': 'Fire in Trains',
      '3B': 'Accidents at Level Crossings',
      '3C': 'Derailments',
      '3D': 'Other train Accidents',
      '3E': 'Yard Accidents',
      '3F': 'Indicative Accidents',
      '3G': 'Averted Collision',
      '3H': 'Breach of Block Rules',
      // Chapter 4
      '4A': 'Train Passing Signal at Danger',
      '4B': 'Equipment Failures',
      '4C': 'Unusual Incidents',
      '4D': 'Sabotage',
      '4E': 'Train Wrecking',
      '4F': 'Attempted Train wrecking',
      '4G': 'Commissioner of Railway Safety',
      '4H': 'ACT',
      '4I': 'Threshold Value',
      // Chapter 5
      '5': 'Classification of Routes',
      // Chapter 6
      '6A': 'Interruption',
      '6B': 'Railway Property',
      '6C': 'Public Property',
      '6D': 'Slight Damage to Property',
      '6E': 'Damage to Property',
      '6F': 'Serious Damage to Property',
      // Chapter 7
      '7A': 'Department',
      '7B': 'Engine Failure and Time Failure',
      '7C': 'Scope of the Rules',
      '7D': 'Distribution of the Accident Manual',
      '7E': 'Acquaintance with the Rules',
      '7F': 'Objectives',
      // Chapter 8
      '8A': 'Resources of all Departments to be made available',
      '8B': 'Every Railway Official to render all possible assistance',
      '8C': 'Duty for Securing Safety',
      // Chapter 9
      '9': 'Consequential Train Accidents',
      '11A': 'Indicative Accidents',
      '11B': 'Equipment failure',
      '12': 'Unusual Incidents',
      // Chapter 10
      '14A': 'Guard of the Train Involved in Accident',
      '14B': 'Engine Crew of the Train',
      '14C': 'Station Master / Station Manager',
      '16A': 'Controlling Station Master',
      '16B': 'Train Superintendent / Traveling Ticket Examiner',
      '16C': 'Officer or Senior Supervisor first reaching the site',
      '18A': 'Commercial Inspectors / Commercial Officers',
      '18B': 'Engineering Staff',
      '19A': 'Mechanical / B.D.Staff',
      '19B': 'Signal and Telecommunication Staff',
      '20A': 'Electrical Staff',
      '20B': 'Security Staff',
      '21': 'Medical Staff',
      '22': 'Chief Controller / Deputy Chief Controller',
      '23': 'Commercial Control',
      '24A': 'Power Controller / Traction Loco Controller',
      '24B': 'Traction Power controller',
      '25A': 'Senior Divisional Operations Manager',
      '25B': 'Senior Divisional Safety Officer',
      '25C': 'Senior Divisional Mechanical Engineer',
      '26A': 'Senior Divisional Electrical Engineer',
      '26B': 'Senior Divisional Electrical Engineer (Traction Distribution)',
      '26C': 'Senior Divisional Electrical Engineer (Traction Operation / Traction Rolling Stock)',
      '26D': 'Senior Divisional Engineer (Civil)',
      '26E': 'Senior Divisional Commercial Manager',
      '27A': 'Senior Divisional Signal and Telecommunication Engineer',
      '27B': 'Senior Divisional Security Commissioner (R.P.F)',
      // Chapter 11
      '28A': 'Reportable Train Accidents',
      '28B': 'Reporting of Accidents',
      '30': 'Particulars to be given in the Accident Report',
      '34A': 'Fax Report to Railway Board',
      '34B': 'Reporting of Indicative Accidents',
      '34C': 'Reporting of Accidents at Un-manned Level Crossings',
      '34D': 'Serious Accidents to be advised promptly',
      '35': 'Procedure for Sending Accident Messages',
      '37': 'Railway Employees to report Accidents',
      '38A': 'Method of reporting Accidents by Railway Employees',
      '38B': 'Station Master or Railway Employee in-charge of the section to report Accidents',
      '39A': 'Station Master to Advise Control',
      '39B': 'Noting down Time of Accident',
      '39C': 'Preliminary Telephonic Report on Serious Accidents by an Officer',
      '39D': 'Reporting of Accidents attended with Injury of Loss of Life',
      '39E': 'Reporting of Accidents on Assisted and Private Sidings',
      '39F': 'Reporting of Accidents at Joint Stations',
      '39G': 'Reporting of Accidents in Workshops coming under the Factories Act',
      '39H': 'Reporting of Accidents on Construction lines',
      '40': 'Reporting of Serious Accidents to the Press',
      '41A': 'Train Accident returns to be sent to the Railway Board',
      '41B': 'Preparation of Accident returns',
      '42': 'Accident Returns - Tables 1 to 7',
      // Chapter 12
      '45': 'Steps to be taken to preserve the Clues and Evidence at Accident site',
      '49A': 'Examination to certify fitness for movement of Locomotive and Rolling Stock',
      '49B': 'The Sketch of the site of Accident',
      '50': 'Pro-forma to be filled up in case of Derailment',
      '54': 'Locomotive (Diesel & Electric) Proforma',
      '58': 'Measurement Table for Coach involved in Accident',
      '61': 'Signal & Telecommunication (Points & Signals)',
      '62A': 'Typical Sketch of Accident site',
      // Chapter 13
      '63A': 'Long Range Electric Sirens',
      '63B': 'Accident Siren Code',
      '64': 'Stations Where Accident Relief Trains are Located',
      '68': 'Medical Relief Train & Medical Relief Equipment',
      '71': 'Stations where Medical Relief Equipment are located',
      '75A': 'Joint Inspection of entire Accident Relief Machinery',
      '75B': 'Action by Divisional Medical Superintendent',
      '75C': 'Action by Divisional Medical Officer',
      '76A': 'Equipment considered necessary in all accidents',
      '76B': 'Action by Divisional Medical Officer where MRT is provided',
      '76C': 'Responsibility of Divisional Medical Officer at Accident spot',
      '77A': 'Standing Instructions by Divisional Chief Medical Superintendent',
      '77B': 'Responsibility of Divisional Chief Medical Superintendent',
      '77C': 'Opening of Dressing Station and Temporary Hospitals',
      '78A': 'Medical Personnel to attend to the Injured',
      '78B': 'Divisional Medical Officer to replace articles',
      '78C': 'Duty of Station Master, Control etc.',
      '79': 'Regular drills by staff',
      '80': 'Maintenance and replenishment of First Aid Boxes',
      '84A': 'Stretchers',
      '84B': 'Maintenance of Accident Relief Machinery',
      '85A': 'Maintenance of Equipment kept in Accident Relief Machinery',
      '85B': 'Training of Man power',
      '85C': 'Portable Emergency Control Phone',
      // Chapter 14
      '87A': 'Facility to Non-Railway Officials',
      '87B': 'Schedule of Powers of Officers for Helicopter/Aero planes',
      '87C': 'Medical Aid to Persons Grievously Hurt',
      '90': 'Media Management at Site',
      '92': 'Complimentary Passes',
      // Chapter 15
      '93': 'Relief to Passengers involved in Train Accidents',
      '94A': 'Compensation for Death/Injury in train Accident',
      '94B': 'Compensation',
      // Chapter 16
      '99A': 'Investigation on the spot',
      '99B': 'Information collection for Inquiry Committee',
      '101': 'Object of Accident Inquiry',
      '102': 'Classification of Accident Enquiries',
      '103': 'Ordering of Inquiries',
      '104': 'Minimum level of Inquiry',
      '105': 'Schedule for completion of Accident Inquiry',
      '106': 'Acceptance of responsibility by Departments',
      '107': 'Special Report',
      '108A': 'Commencing of Joint and Inter-departmental Inquiries',
      '108B': 'Method of conducting Joint/Inter Departmental Inquiries',
      '108C': 'Composition of Inquiry Committee',
      '109A': 'President of Inquiry Committee',
      '109B': 'Officer\'s duties in connection with inquiry',
      '109C': 'Failure to attend Inquiry',
      '109D': 'Postponing of an Inquiry',
      '109E': 'Guidelines for Inquiry Committee members',
      '110': 'Proceedings of Joint or Inter-departmental Inquiries',
      '113A': 'Description of the Accident',
      '113B': 'Recording of Evidence',
      '114A': 'Findings',
      '114B': 'Remarks and Reasons for Findings',
      '115A': 'Suggestions',
      '115B': 'Matters Brought to Light during Inquiry',
      '115C': 'Signing of Joint Inquiry Proceedings',
      '116A': 'Inquiries into accidents at Joint Stations',
      '116B': 'Particulars in Special Report or Inquiry Report',
      '116C': 'Report of inquiry to Railway Administration',
      '117A': 'Acceptance of Findings',
      '117B': 'Reports of Inquiries to Commissioner of Railway Safety',
      '118A': 'Submission of Inquiry Report',
      '118B': 'Metallurgical and Chemical investigation',
      '118C': 'Norms of Punishments',
      '118D': 'Magisterial Inquiry',
      // Chapter 17
      '119A': 'All concerned Telephonic Message to CRS',
      '119B': 'Telephonic advice to CRS',
      '119C': 'Accidents to be reported to CRS by post',
      '119D': 'Non-Reporting of Accidents to CRS',
      '119E': 'Statement of Accidents to CRS',
      '120': 'Statutory Investigation into Railway Accidents',
      '121A': 'Attendance of Railway employees to attend Inquiries',
      '121B': 'Officers to assist CRS',
      '121C': 'Brief Preliminary Narrative report',
      '122A': 'Final Report',
      '122B': 'Action on the Report by Railway Administration',
      '122C': 'Railway\'s remarks on suggestions',
      '123A': 'Publication of Reports',
      '123B': 'District Magistrate to Attend CRS Inquiry',
      '123C': 'District Superintendent of Police to attend CRS Inquiry',
      '123D': 'Technical Matters',
      '123E': 'Powers of CRS',
      '123F': 'Target dates for submission of returns',
      '124': 'Target for Completion of CRS Inquiries',
      // Chapter 18
      '125A': 'Unsafe Bunds of Tanks of Rivers',
      '125B': 'Injured or Dead persons found on or near Railway Track',
      '126': 'Person Fallen out of a Train',
      '127A': 'Carriage Windows or Doors Involved',
      '127B': 'Defective Running of Locomotives',
      '127C': 'Persons found Dead in Trains or at Stations',
      '128A': 'Murder on Running Train',
      '128B': 'Care of Dead bodies',
      '128C': 'Material fouling the Track',
      '128D': 'Precautions against Derailment',
      '129A': 'Dangerous practices',
      '129B': 'Reporting Fire',
      // Chapter 19
      '130A': 'General',
      '130B': 'Explosion on Track or Train',
      '131A': 'Duties of Guard, Engine crew and Railway staff',
      '131B': 'Information to Civil and Police Authorities',
      '131C': 'Precautions by Engineering Supervisors',
      '131D': 'Duties of Officers and Supervisory Officials',
      '131E': 'Duties of Railway Protection Force Officials',
      '132A': 'Police Clearance',
      '132B': 'Joint Examination by Civil, Police and Railway Officials',
      '132C': 'Removal and Examination of Rolling stock',
      '133A': 'Preparation of Notes and Drawings',
      '133B': 'Restoration of Communications',
      '133C': 'Preparation of Plan for Inquiry',
      '134A': 'Preservation of Notes and Sketches',
      '134B': 'Association of Security Officer',
      // Appendix topics
      '135A': 'DISASTER MANAGEMENT ACT (2005)',
      '135B': 'NDMA (National Disaster Management Authority)',
      '136': 'NDRF (National Disaster Relief Force)',
      '137A': 'Definition of Disaster',
      '137B': 'IMPORTANT CONTACT NUMBERS – RAILWAYS',
      '138': 'IMPORTANT CONTACT NUMBERS GOVERNMENT OF ANDHRA PRADESH'
    }

    return pageToTopicMap[page] || 'Unknown Topic'
  }

  // Map page numbers to chapter components
  const chapterComponents: { [key: string]: React.ComponentType } = {
    '1A': AMChapterPage1A,
    '1B': AMChapterPage1B,
    '1C': AMChapterPage1C,
    '1D': AMChapterPage1D,
    '1E': AMChapterPage1E,
    '2A': AMChapterPage2A,
    '2B': AMChapterPage2B,
    '2C': AMChapterPage2C,
    '2D': AMChapterPage2D,
    '2E': AMChapterPage2E,
    '2F': AMChapterPage2F,
    '2G': AMChapterPage2G,
    '3A': AMChapterPage3A,
    '3B': AMChapterPage3B,
    '3C': AMChapterPage3C,
    '3D': AMChapterPage3D,
    '3E': AMChapterPage3E,
    '3F': AMChapterPage3F,
    '3G': AMChapterPage3G,
    '3H': AMChapterPage3H,
    '4A': AMChapterPage4A,
    '4B': AMChapterPage4B,
    '4C': AMChapterPage4C,
    '4D': AMChapterPage4D,
    '4E': AMChapterPage4E,
    '4F': AMChapterPage4F,
    '4G': AMChapterPage4G,
    '4H': AMChapterPage4H,
    '4I': AMChapterPage4I,
    '5': AMChapterPage5,
    '6A': AMChapterPage6A,
    '6B': AMChapterPage6B,
    '6C': AMChapterPage6C,
    '6D': AMChapterPage6D,
    '6E': AMChapterPage6E,
    '6F': AMChapterPage6F,
    '7A': AMChapterPage7A,
    '7B': AMChapterPage7B,
    '7C': AMChapterPage7C,
    '7D': AMChapterPage7D,
    '7E': AMChapterPage7E,
    '7F': AMChapterPage7F,
    '8A': AMChapterPage8A,
    '8B': AMChapterPage8B,
    '8C': AMChapterPage8C,
    '9': AMChapterPage9,
    '11A': AMChapterPage11A,
    '11B': AMChapterPage11B,
    '12': AMChapterPage12,
    '14A': AMChapterPage14A,
    '14B': AMChapterPage14B,
    '14C': AMChapterPage14C,
    '16A': AMChapterPage16A,
    '16B': AMChapterPage16B,
    '16C': AMChapterPage16C,
    '18A': AMChapterPage18A,
    '18B': AMChapterPage18B,
    '19A': AMChapterPage19A,
    '19B': AMChapterPage19B,
    '20A': AMChapterPage20A,
    '20B': AMChapterPage20B,
    '21': AMChapterPage21,
    '22': AMChapterPage22,
    '23': AMChapterPage23,
    '24A': AMChapterPage24A,
    '24B': AMChapterPage24B,
    '25A': AMChapterPage25A,
    '25B': AMChapterPage25B,
    '25C': AMChapterPage25C,
    '26A': AMChapterPage26A,
    '26B': AMChapterPage26B,
    '26C': AMChapterPage26C,
    '26D': AMChapterPage26D,
    '26E': AMChapterPage26E,
    '27A': AMChapterPage27A,
    '27B': AMChapterPage27B,
    '28A': AMChapterPage28A,
    '28B': AMChapterPage28B,
    '30': AMChapterPage30,
    '34A': AMChapterPage34A,
    '34B': AMChapterPage34B,
    '34C': AMChapterPage34C,
    '34D': AMChapterPage34D,
    '35': AMChapterPage35,
    '37': AMChapterPage37,
    '38A': AMChapterPage38A,
    '38B': AMChapterPage38B,
    '39A': AMChapterPage39A,
    '39B': AMChapterPage39B,
    '39C': AMChapterPage39C,
    '39D': AMChapterPage39D,
    '39E': AMChapterPage39E,
    '39F': AMChapterPage39F,
    '39G': AMChapterPage39G,
    '39H': AMChapterPage39H,
    '40': AMChapterPage40,
    '41A': AMChapterPage41A,
    '41B': AMChapterPage41B,
    '42': AMChapterPage42,
    '45': AMChapterPage45,
    '49A': AMChapterPage49A,
    '49B': AMChapterPage49B,
    '50': AMChapterPage50,
    '54': AMChapterPage54,
    '58': AMChapterPage58,
    '61': AMChapterPage61,
    '62A': AMChapterPage62A,
    '63A': AMChapterPage63A,
    '63B': AMChapterPage63B,
    '64': AMChapterPage64,
    '68': AMChapterPage68,
    '71': AMChapterPage71,
    '75A': AMChapterPage75A,
    '75B': AMChapterPage75B,
    '75C': AMChapterPage75C,
    '76A': AMChapterPage76A,
    '76B': AMChapterPage76B,
    '76C': AMChapterPage76C,
    '77A': AMChapterPage77A,
    '77B': AMChapterPage77B,
    '77C': AMChapterPage77C,
    '78A': AMChapterPage78A,
    '78B': AMChapterPage78B,
    '78C': AMChapterPage78C,
    '79': AMChapterPage79,
    '80': AMChapterPage80,
    '84A': AMChapterPage84A,
    '84B': AMChapterPage84B,
    '85A': AMChapterPage85A,
    '85B': AMChapterPage85B,
    '85C': AMChapterPage85C,
    '87A': AMChapterPage87A,
    '87B': AMChapterPage87B,
    '87C': AMChapterPage87C,
    '90': AMChapterPage90,
    '92': AMChapterPage92,
    '93': AMChapterPage93,
    '94A': AMChapterPage94A,
    '94B': AMChapterPage94B,
    '99A': AMChpaterPage99A,
    '99B': AMChpaterPage99B,
    '101A': AMChpaterPage101A,
    '101B': AMChapaterPage101B,
    '102': AMChapaterPage102,
    '103A': AMChapaterPage103A,
    '103B': AMChapaterPage103B,
    '104A': AMChapaterPage104A,
    '104B': AMChapaterPage104B,
    '104C': AMChapaterPage104C,
    '104D': AMChapaterPage104D,
    '105': AMChapaterPage105,
    '106A': AMChapaterPage106A,
    '106B': AMChapaterPage106B,
    '106C': AMChapaterPage106C,
    '106D': AMChapaterPage106D,
    '106E': AMChapaterPage106E,
    '107': AMChapaterPage107,
    '108A': AMChapaterPage108A,
    '108B': AMChapaterPage108B,
    '108C': AMChapaterPage108C,
    '109A': AMChapaterPage109A,
    '109B': AMChapaterPage109B,
    '109C': AMChapaterPage109C,
    '109D': AMChapaterPage109D,
    '109E': AMChapaterPage109E,
    '110': AMChapaterPage110,
    '113A': AMChapaterPage113A,
    '113B': AMChapaterPage113B,
    '114A': AMChapaterPage114A,
    '114B': AMChapaterPage114B,
    '115A': AMChapaterPage115A,
    '115B': AMChapaterPage115B,
    '115C': AMChapaterPage115C,
    '116A': AMChapaterPage116A,
    '116B': AMChapaterPage116B,
    '116C': AMChapaterPage116C,
    '117A': AMChapaterPage117A,
    '117B': AMChapaterPage117B,
    '118A': AMChapaterPage118A,
    '118B': AMChapaterPage118B,
    '118C': AMChapaterPage118C,
    '118D': AMChapaterPage118D,
    '119A': AMChapaterPage119A,
    '119B': AMChapaterPage119B,
    '119C': AMChapaterPage119C,
    '119D': AMChapaterPage119D,
    '119E': AMChapaterPage119E,
    '120': AMChapaterPage120,
    '121A': AMChapaterPage121A,
    '121B': AMChapaterPage121B,
    '121C': AMChapaterPage121C,
    '122A': AMChapaterPage122A,
    '122B': AMChapaterPage122B,
    '122C': AMChapaterPage122C,
    '123A': AMChapaterPage123A,
    '123B': AMChapaterPage123B,
    '123C': AMChapaterPage123C,
    '123D': AMChapaterPage123D,
    '123E': AMChapaterPage123E,
    '123F': AMChapaterPage123F,
    '124': AMChapaterPage124,
    '125A': AMChapaterPage125A,
    '125B': AMChapaterPage125B,
    '126': AMChapaterPage126,
    '127A': AMChapaterPage127A,
    '127B': AMChapaterPage127B,
    '127C': AMChapaterPage127C,
    '128A': AMChapaterPage128A,
    '128B': AMChapaterPage128B,
    '128C': AMChapaterPage128C,
    '128D': AMChapaterPage128D,
    '129A': AMChapaterPage129A,
    '129B': AMChapaterPage129B,
    '130A': AMChapaterPage130A,
    '130B': AMChapaterPage130B,
    '131A': AMChapaterPage131A,
    '131B': AMChapaterPage131B,
    '131C': AMChapaterPage131C,
    '131D': AMChapaterPage131D,
    '131E': AMChapaterPage131E,
    '132A': AMChapaterPage132A,
    '132B': AMChapaterPage132B,
    '132C': AMChapaterPage132C,
    '133A': AMChapaterPage133A,
    '133B': AMChapaterPage133B,
    '133C': AMChapaterPage133C,
    '134A': AMChapaterPage134A,
    '134B': AMChapaterPage134B
  }

  // Map page numbers to appendix components
  const appendixComponents: { [key: string]: React.ComponentType } = {
    '135A': AMAppendixPage135A,
    '135B': AMAppendixPage135B,
    '136': AMAppendixPage136,
    '137A': AMAppendixPage137A,
    '137B': AMAppendixPage137B,
    '138': AMAppendixPage138,
    '139A': AMAppendixPage139A,
    '139B': AMAppendixPage139B,
    '139C': AMAppendixPage139C,
    '140': AMAppendixPage140,
    '141': AMAppendixPage141,
    '142': AMAppendixPage142,
    '143': AMAppendixPage143,
    '145A': AMAppendixPage145A,
    '145B': AMAppendixPage145B,
    '146A': AMAppendixPage146A,
    '146B': AMAppendixPage146B,
    '147A': AMAppendixPage147A,
    '147B': AMAppendixPage147B,
    '148A': AMAppendixPage148A,
    '148B': AMAppendixPage148B,
    '149A': AMAppendixPage149A,
    '149B': AMAppendixPage149B,
    '151': AMAppendixPage151,
    '153': AMAppendixPage153,
    '156': AMAppendixPage156,
    '156B': AMAppendixPage156B,
    '156C': AMAppendixPage156C,
    '157': AMAppendixPage157,
    '160': AMAppendixPage160,
    '161A': AMAppendixPage161A,
    '161B': AMAppendixPage161B,
    '162': AMAppendixPage162,
    '163': AMAppendixPage163,
    '168': AMAppendixPage168,
    '169': AMAppendixPage169,
    '171': AMAppendixPage171,
    '174': AMAppendixPage174,
    '175': AMAppendixPage175,
    '176': AMAppendixPage176,
    '177': AMAppendixPage177,
    '178': AMAppendixPage178,
    '179': AMAppendixPage179,
    '180': AMAppendixPage180,
    '181': AMAppendixPage181,
    '183': AMAppendixPage183,
    '185': AMAppendixPage185,
    '186': AMAppendixPage186,
    '188': AMAppendixPage188,
    '188B': AMAppendixPage188B,
    '189': AMAppendixPage189,
    '190': AMAppendixPage190,
    '190A': AMAppendixPage190A,
    '190B': AMAppendixPage190B,
    '191': AMAppendixPage191,
    '192': AMAppendixPage192,
    '193': AMAppendixPage193,
    '194': AMAppendixPage194,
    '195': AMAppendixPage195,
    '196': AMAppendixPage196,
    '197': AMAppendixPage197,
    '198': AMAppendixPage198,
    '199': AMAppendixPage199,
    '200': AMAppendixPage200,
    '201': AMAppendixPage201,
    '202': AMAppendixPage202,
    '203': AMAppendixPage203,
    '204': AMAppendixPage204,
    '205A': AMAppendixPage205A,
    '205B': AMAppendixPage205B,
    '205C': AMAppendixPage205C,
    '206': AMAppendixPage206,
    '207': AMAppendixPage207,
    '208A': AMAppendixPage208A,
    '208B': AMAppendixPage208B
  }

  const ContentComponent = chapterComponents[pageNumber] || appendixComponents[pageNumber]

  const openPDF = () => {
    let pdfPath = ''

    // Check if it's an appendix page (starts with 135 or higher)
    const pageNum = parseInt(pageNumber.replace(/[^\d]/g, ''))
    if (pageNum >= 135) {
      // Appendix pages
      pdfPath = `/ampdfs/am-appendix-pages/AMAppendixPage${pageNumber.toUpperCase()}.pdf`
    } else {
      // Chapter pages
      pdfPath = `/ampdfs/am-chapter-pages/AMPAGE${pageNumber.toUpperCase()}.pdf`
    }

    window.open(pdfPath, '_blank')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-amber-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading content...</p>
        </div>
      </div>
    )
  }

  if (!ContentComponent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-amber-900 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h1 className="text-2xl font-bold text-white mb-4">Page Not Found</h1>
            <p className="text-gray-300 mb-6">Content for page {pageNumber} is not available.</p>
            <button
              onClick={() => router.push('/accident')}
              className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-6 py-3 rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300"
            >
              Back to Index
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-amber-900">
      {/* Header Navigation */}
      <div className="bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-2 lg:px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/accident')}
                className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-orange-600 text-white text-xs lg:text-base lg:px-4 px-2 py-2 rounded-sm hover:from-red-600 hover:to-orange-700 transition-all duration-300 mr-2"
              >
                <span>Back to Index</span>
              </button>


            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 lg:px-4 px-2 py-2 rounded-sm backdrop-blur-sm border border-red-400/30">
                <span className="text-white text-xs lg:text-base">Topic : {getTopicForPage(pageNumber)}</span>
              </div>

              <button
                onClick={openPDF}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs lg:text-base lg:px-4 px-2 py-2 rounded-sm hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
              >
                <span>Document</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto lg:px-4 px-2 py-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="bg-gradient-to-r from-red-500 to-orange-600 text-white py-4 px-2">
            <div className="flex items-center justify-center space-x-3">
              <div>
                <h1 className="text-2xl lg:text-3xl font-semibold text-center uppercase">Accident Manual</h1>
                <hr className="border-white/20"/>
                <ul className="mt-2 space-y-1 text-center">
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-300">Topic : </span>
                    <span className="text-white font-normal">{getTopicForPage(pageNumber)}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:p-6 p-1">
            <ContentComponent />
          </div>
        </div>
      </div>

      {/* Navigation Buttons - At bottom of content */}
      <div className="mt-1 mb-1 p-3">
        <div className="flex items-center justify-between space-x-8">
          {/* Previous Topic Button */}
          <button
            onClick={() => {
              const prevPage = getPreviousPage(pageNumber)
              if (prevPage) {
                router.push(`/accident/content/${prevPage}`)
              }
            }}
            disabled={!getPreviousPage(pageNumber)}
            className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
              getPreviousPage(pageNumber)
                ? 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:scale-105'
                : 'bg-gray-500 cursor-not-allowed opacity-50'
            }`}
          >
            <span className='text-xs lg:text-sm flex items-center justify-center gap-1'>
              Previous
            </span>
            <hr className="border-white/30 w-full my-1" />
            <span className='text-xs lg:text-sm'>
              {(() => {
                const prevPage = getPreviousPage(pageNumber)
                return prevPage ? getTopicForPage(prevPage) : "Previous"
              })()}
            </span>
          </button>

          {/* Next Topic Button */}
          <button
            onClick={() => {
              const nextPage = getNextPage(pageNumber)
              if (nextPage) {
                router.push(`/accident/content/${nextPage}`)
              }
            }}
            disabled={!getNextPage(pageNumber)}
            className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
              getNextPage(pageNumber)
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-105'
                : 'bg-gray-500 cursor-not-allowed opacity-50'
            }`}
          >
            <span className='text-xs lg:text-sm flex items-center justify-center gap-1'>
              Next
            </span>
            <hr className="border-white/30 w-full my-1" />
            <span className='text-xs lg:text-sm'>
              {(() => {
                const nextPage = getNextPage(pageNumber)
                return nextPage ? getTopicForPage(nextPage) : "Next"
              })()}
            </span>
          </button>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-4 bg-gradient-to-tr from-red-600 via-red-400 to-red-700 text-white p-1 rounded-full shadow-2xl border-2 border-white hover:scale-110 hover:from-red-700 hover:to-red-500 transition-all duration-300 z-50 flex items-center justify-center animate-pulse"
          aria-label="Scroll to top"
        >
          {/* Up Arrow Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default ContentPage
