var documenterSearchIndex = {"docs":
[{"location":"units/#Units-1","page":"Units","title":"Units","text":"","category":"section"},{"location":"units/#","page":"Units","title":"Units","text":"Certain properties return measures with a Unitful unit type. These units all have default values but can be changed for a particular value type via method overloading.","category":"page"},{"location":"units/#","page":"Units","title":"Units","text":"NeuroCore.second_type\nNeuroCore.tesla_type\nNeuroCore.degree_type\nNeuroCore.hertz_type\nNeuroCore.ohms_type","category":"page"},{"location":"units/#NeuroCore.second_type","page":"Units","title":"NeuroCore.second_type","text":"second_type(x)\n\nReturns the type used for seconds given x.\n\nExamples\n\njulia> using NeuroCore\n\njulia> second_type(Any)\nUnitful.Quantity{Float64,𝐓,Unitful.FreeUnits{(s,),𝐓,nothing}}\n\n\n\n\n\n","category":"function"},{"location":"units/#NeuroCore.tesla_type","page":"Units","title":"NeuroCore.tesla_type","text":"tesla_type(x)\n\nReturns the type used for tesla given x.\n\nExamples\n\njulia> using NeuroCore\n\njulia> tesla_type(Any)\nUnitful.Quantity{Float64,𝐌*𝐈^-1*𝐓^-2,Unitful.FreeUnits{(T,),𝐌*𝐈^-1*𝐓^-2,nothing}}\n\n\n\n\n\n","category":"function"},{"location":"units/#NeuroCore.degree_type","page":"Units","title":"NeuroCore.degree_type","text":"degree_type(x)\n\nReturns the type used for hertz given x.\n\nExamples\n\njulia> using NeuroCore\n\njulia> degree_type(Any)\nUnitful.Quantity{Int64,NoDims,Unitful.FreeUnits{(°,),NoDims,nothing}}\n\n\n\n\n\n","category":"function"},{"location":"units/#NeuroCore.hertz_type","page":"Units","title":"NeuroCore.hertz_type","text":"hertz_type(x)\n\nReturns the type used for hertz given x.\n\nExamples\n\njulia> using NeuroCore\n\njulia> hertz_type(Any)\nUnitful.Quantity{Float64,𝐓^-1,Unitful.FreeUnits{(Hz,),𝐓^-1,nothing}}\n\n\n\n\n\n","category":"function"},{"location":"units/#NeuroCore.ohms_type","page":"Units","title":"NeuroCore.ohms_type","text":"ohms_type(x)\n\nReturns the type used for ohms given x.\n\nExamples\n\njulia> using NeuroCore\n\njulia> ohms_type(Any)\nUnitful.Quantity{Float64,𝐋^2*𝐌*𝐈^-2*𝐓^-3,Unitful.FreeUnits{(kΩ,),𝐋^2*𝐌*𝐈^-2*𝐓^-3,nothing}}\n\n\n\n\n\n","category":"function"},{"location":"dimensions/#Orientation-and-Dimension-Names-1","page":"Orientation and Dimensions","title":"Orientation and Dimension Names","text":"","category":"section"},{"location":"dimensions/#","page":"Orientation and Dimensions","title":"Orientation and Dimensions","text":"NeuroCore places a strong emphasis on arrays that with named dimensions. This allows the use of well established interfaces for arrays across the julia ecosystem while still providing meaningful information that may be specific to the type of data being worked with.","category":"page"},{"location":"dimensions/#","page":"Orientation and Dimensions","title":"Orientation and Dimensions","text":"sagittaldim\ncoronaldim\naxialdim\nindices_sagittal\nindices_axial\nindices_coronal\nindices_unit\nOnset\nStopTime\nDuration\nTimeContinuity\nSamplingRate\nSpatialOffset\nspatial_units\nis_radiologic\nis_neurologic","category":"page"},{"location":"dimensions/#NeuroCore.sagittaldim","page":"Orientation and Dimensions","title":"NeuroCore.sagittaldim","text":"sagittaldim(x) -> Int\n\nReturn the dimension of the array used for sagittal time.\n\n\n\n\n\n","category":"function"},{"location":"dimensions/#NeuroCore.coronaldim","page":"Orientation and Dimensions","title":"NeuroCore.coronaldim","text":"coronaldim(x) -> Int\n\nReturn the dimension of the array used for coronal time.\n\n\n\n\n\n","category":"function"},{"location":"dimensions/#NeuroCore.axialdim","page":"Orientation and Dimensions","title":"NeuroCore.axialdim","text":"axialdim(x) -> Int\n\nReturn the dimension of the array used for axial time.\n\n\n\n\n\n","category":"function"},{"location":"dimensions/#NeuroCore.indices_sagittal","page":"Orientation and Dimensions","title":"NeuroCore.indices_sagittal","text":"indices_sagittal(x)\n\nReturn the indices of the sagittal dimension.\n\n\n\n\n\n","category":"function"},{"location":"dimensions/#NeuroCore.indices_axial","page":"Orientation and Dimensions","title":"NeuroCore.indices_axial","text":"indices_axial(x)\n\nReturn the indices of the axial dimension.\n\n\n\n\n\n","category":"function"},{"location":"dimensions/#NeuroCore.indices_coronal","page":"Orientation and Dimensions","title":"NeuroCore.indices_coronal","text":"indices_coronal(x)\n\nReturn the indices of the coronal dimension.\n\n\n\n\n\n","category":"function"},{"location":"dimensions/#NeuroCore.is_radiologic","page":"Orientation and Dimensions","title":"NeuroCore.is_radiologic","text":"is_radiologic(x) -> Bool\n\nTest to see if x is in radiological orientation.\n\n\n\n\n\n","category":"function"},{"location":"dimensions/#NeuroCore.is_neurologic","page":"Orientation and Dimensions","title":"NeuroCore.is_neurologic","text":"is_neurologic(x) -> Bool\n\nTest to see if x is in neurological orientation.\n\n\n\n\n\n","category":"function"},{"location":"imaging_metadata/#Imaging-Metadata-1","page":"Imaging Metadata","title":"Imaging Metadata","text":"","category":"section"},{"location":"imaging_metadata/#Sequence-Metadata-1","page":"Imaging Metadata","title":"Sequence Metadata","text":"","category":"section"},{"location":"imaging_metadata/#Properties-1","page":"Imaging Metadata","title":"Properties","text":"","category":"section"},{"location":"imaging_metadata/#","page":"Imaging Metadata","title":"Imaging Metadata","text":"NeuroCore.NonlinearGradientCorrection\nNeuroCore.PulseSequence\nNeuroCore.PulseSequenceDetails\nNeuroCore.PulseSequenceType\nNeuroCore.ScanningSequence\nNeuroCore.SequenceName\nNeuroCore.SequenceVarient","category":"page"},{"location":"imaging_metadata/#NeuroCore.NonlinearGradientCorrection","page":"Imaging Metadata","title":"NeuroCore.NonlinearGradientCorrection","text":"Returns Bool stating if the image saved has been corrected for gradient nonlinearities by the scanner sequence. Default is false.\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.PulseSequence","page":"Imaging Metadata","title":"NeuroCore.PulseSequence","text":"General description of the pulse sequence used for the scan (i.e. MPRAGE, Gradient Echo EPI, Spin Echo EPI, Multiband gradient echo EPI).\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.PulseSequenceDetails","page":"Imaging Metadata","title":"NeuroCore.PulseSequenceDetails","text":"Information beyond pulse sequence type that identifies the specific pulse sequence used (i.e. \"Standard Siemens Sequence distributed with the VB17 software,\" \"Siemens WIP ### version #.##,\" or \"Sequence written by X using a version compiled on MM/DD/YYYY\").\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.PulseSequenceType","page":"Imaging Metadata","title":"NeuroCore.PulseSequenceType","text":"A general description of the pulse sequence used for the scan (i.e. MPRAGE, Gradient Echo EPI, Spin Echo EPI, Multiband gradient echo EPI).\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.ScanningSequence","page":"Imaging Metadata","title":"NeuroCore.ScanningSequence","text":"Description of the type of sequence data acquired.\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.SequenceName","page":"Imaging Metadata","title":"NeuroCore.SequenceName","text":"Manufacturer’s designation of the sequence name.\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.SequenceVarient","page":"Imaging Metadata","title":"NeuroCore.SequenceVarient","text":"Variant of the scanning_sequence property.\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#Metadata-1","page":"Imaging Metadata","title":"Metadata","text":"","category":"section"},{"location":"imaging_metadata/#","page":"Imaging Metadata","title":"Imaging Metadata","text":"NeuroCore.SequenceMetadata","category":"page"},{"location":"imaging_metadata/#NeuroCore.SequenceMetadata","page":"Imaging Metadata","title":"NeuroCore.SequenceMetadata","text":"SequenceMetadata\n\nMetadata structure for general MRI sequence information.\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#Encoding-Direction-1","page":"Imaging Metadata","title":"Encoding Direction","text":"","category":"section"},{"location":"imaging_metadata/#","page":"Imaging Metadata","title":"Imaging Metadata","text":"Modules = [NeuroCore.EncodingDirections]\nOrder   = [:function, :type]","category":"page"},{"location":"imaging_metadata/#NeuroCore.EncodingDirections.EncodingDirection","page":"Imaging Metadata","title":"NeuroCore.EncodingDirections.EncodingDirection","text":"EncodingDirection\n\nPossible values: i, j, k, ineg,jneg,kneg(the axis of the NIfTI data along which slices were acquired, and the direction in which SliceTiming is defined with respect to).i,j,kidentifiers correspond to the first, second and third axis of the data in the NIfTI file.*neg` indicates that the contents of SliceTiming are defined in reverse order - that is, the first entry corresponds to the slice with the largest index, and the final entry corresponds to slice index zero. \n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.EncodingDirections.EncodingDirectionMetadata","page":"Imaging Metadata","title":"NeuroCore.EncodingDirections.EncodingDirectionMetadata","text":"EncodingDirectionMetadata\n\nMetadata structure for general MRI sequence information.\n\nProperties\n\nfreqdim: Which spatial dimension (1, 2, or 3) corresponds to phase acquisition.\nphasedim: Which spatial dimension (1, 2, or 3) corresponds to phase acquisition.\nslicedim: Which dimension slices where acquired at throughout MRI acquisition.\nslice_start: Which slice corresponds to the first slice acquired during MRI acquisition (i.e. not padded slices).\nslice_end: Which slice corresponds to the last slice acquired during MRI acquisition (i.e. not padded slices).\nslice_duration: Time to acquire one slice\nsliceencodingdirection: Possible values: \nphaseencodingdirection: The phase encoding direction is defined as the direction along which phase was modulated which may result in visible distortions. Note that this is not the same as the DICOM term \n\nExamples\n\njulia> using NeuroCore.EncodingDirections\n\njulia> m = EncodingDirectionMetadata(1, 2, 3, 4, 5, 6)\nEncodingDirectionMetadata(1, 2, 3, 4, 5, 6.0)\n\njulia> m.slice_encoding_direction\nkpos::EncodingDirection = 3\n\njulia> m.phase_encoding_direction\njpos::EncodingDirection = 2\n\njulia> m.freqdim\n1\n\njulia> m.phasedim\n2\n\njulia> m.slicedim\n3\n\njulia> m.slice_start\n4\n\njulia> m.slice_end\n5\n\njulia> m.slice_duration\n6.0\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.EncodingDirections.FrequencyDimension","page":"Imaging Metadata","title":"NeuroCore.EncodingDirections.FrequencyDimension","text":"Which spatial dimension (1, 2, or 3) corresponds to phase acquisition.\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.EncodingDirections.PhaseDimension","page":"Imaging Metadata","title":"NeuroCore.EncodingDirections.PhaseDimension","text":"Which spatial dimension (1, 2, or 3) corresponds to phase acquisition.\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.EncodingDirections.PhaseEncodingDirection","page":"Imaging Metadata","title":"NeuroCore.EncodingDirections.PhaseEncodingDirection","text":"The phase encoding direction is defined as the direction along which phase was modulated which may result in visible distortions. Note that this is not the same as the DICOM term in_plane_phase_encoding_direction which can have ROW or COL values. This parameter is REQUIRED if corresponding fieldmap data is present or when using multiple runs with different phase encoding directions (which can be later used for field inhomogeneity correction).\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.EncodingDirections.SliceDimension","page":"Imaging Metadata","title":"NeuroCore.EncodingDirections.SliceDimension","text":"Which dimension slices where acquired at throughout MRI acquisition.\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.EncodingDirections.SliceDuration","page":"Imaging Metadata","title":"NeuroCore.EncodingDirections.SliceDuration","text":"Time to acquire one slice\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.EncodingDirections.SliceEncodingDirection","page":"Imaging Metadata","title":"NeuroCore.EncodingDirections.SliceEncodingDirection","text":"Possible values: i, j, k, ineg,jneg,kneg(the axis of the NIfTI data along which slices were acquired, and the direction in which slice_timing is defined with respect to).i,j,kidentifiers correspond to the first, second and third axis of the data in the NIfTI file.*negindicates that the contents of slice_timing are defined in reverse order - that is, the first entry corresponds to the slice with the largest index, and the final entry corresponds to slice index zero. When present, the axis defined bysliceencoding` needs to be consistent with the ‘slicedim’ field in the NIfTI header. When absent, the entries in slicetiming must be in the order of increasing slice index as defined by the NIfTI header.\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.EncodingDirections.SliceEnd","page":"Imaging Metadata","title":"NeuroCore.EncodingDirections.SliceEnd","text":"Which slice corresponds to the last slice acquired during MRI acquisition (i.e. not padded slices).\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.EncodingDirections.SliceStart","page":"Imaging Metadata","title":"NeuroCore.EncodingDirections.SliceStart","text":"Which slice corresponds to the first slice acquired during MRI acquisition (i.e. not padded slices).\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#Spatial-Encoding-1","page":"Imaging Metadata","title":"Spatial Encoding","text":"","category":"section"},{"location":"imaging_metadata/#Properties-2","page":"Imaging Metadata","title":"Properties","text":"","category":"section"},{"location":"imaging_metadata/#","page":"Imaging Metadata","title":"Imaging Metadata","text":"NeuroCore.NumberShots\nNeuroCore.EffectiveEchoSpacing\nNeuroCore.ParallelAcquisitionTechnique\nNeuroCore.ParallelReductionFactor\nNeuroCore.PartialFourier\nNeuroCore.PartialFourierDirection\nNeuroCore.TotalReadoutTime","category":"page"},{"location":"imaging_metadata/#NeuroCore.NumberShots","page":"Imaging Metadata","title":"NeuroCore.NumberShots","text":"The number of RF excitations needed to reconstruct a slice or volume. Please mind that this is not the same as Echo Train Length which denotes the number of lines of k-space collected after an excitation.\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.EffectiveEchoSpacing","page":"Imaging Metadata","title":"NeuroCore.EffectiveEchoSpacing","text":"The \"effective\" sampling interval, specified in seconds, between lines in the phase-encoding direction, defined based on the size of the reconstructed image in the phase direction. It is frequently, but incorrectly, referred to as \"dwell time\" (see dwell_time parameter below for actual dwell time). It is required for unwarping distortions using field maps. Note that beyond just in-plane acceleration, a variety of other manipulations to the phase encoding need to be accounted for properly, including partial fourier, phase oversampling, phase resolution, phase field-of-view and interpolation.<sup>2</sup> This parameter is REQUIRED if corresponding fieldmap data is present.\n\n<sup>2</sup>Conveniently, for Siemens’ data, this value is easily obtained as 1/[BWPPPE * ReconMatrixPE], where BWPPPE is the \"BandwidthPerPixelPhaseEncode in DICOM tag (0019,1028) and ReconMatrixPE is the size of the actual reconstructed data in the phase direction (which is NOT reflected in a single DICOM tag for all possible aforementioned scan manipulations). See here and here\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.ParallelAcquisitionTechnique","page":"Imaging Metadata","title":"NeuroCore.ParallelAcquisitionTechnique","text":"The type of parallel imaging used (e.g. GRAPPA, SENSE).\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.ParallelReductionFactor","page":"Imaging Metadata","title":"NeuroCore.ParallelReductionFactor","text":"The parallel imaging (e.g, GRAPPA) factor. Use the denominator of the fraction of k-space encoded for each slice. For example, 2 means half of k-space is encoded.\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.PartialFourier","page":"Imaging Metadata","title":"NeuroCore.PartialFourier","text":"The fraction of partial Fourier information collected.\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.PartialFourierDirection","page":"Imaging Metadata","title":"NeuroCore.PartialFourierDirection","text":"The direction where only partial Fourier information was collected.\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.TotalReadoutTime","page":"Imaging Metadata","title":"NeuroCore.TotalReadoutTime","text":"The total readout time. This is actually the \"effective\" total readout time , defined as the readout duration, specified in seconds, that would have generated data with the given level of distortion. It is NOT the actual, physical duration of the readout train. If effective_echo_spacing has been properly computed, it is just effective_echo_spacing * (ReconMatrixPE - 1).<sup>3</sup> .\n\nThis parameter is\n\nREQUIRED if corresponding \"field/distortion\" maps acquired with opposing phase encoding directions are present.\n\n<sup>3</sup>We use the \"FSL definition\", i.e, the time between the center of the first \"effective\" echo and the center of the last \"effective\" echo.\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#Magentization-Transfer-1","page":"Imaging Metadata","title":"Magentization Transfer","text":"","category":"section"},{"location":"imaging_metadata/#Properties-3","page":"Imaging Metadata","title":"Properties","text":"","category":"section"},{"location":"imaging_metadata/#","page":"Imaging Metadata","title":"Imaging Metadata","text":"NeuroCore.MTState\nNeuroCore.MTOffsetFrequency\nNeuroCore.MTPulseBandwidth\nNeuroCore.MTNumberOfPulses\nNeuroCore.MTPulseShape\nNeuroCore.MTPulseDuration","category":"page"},{"location":"imaging_metadata/#NeuroCore.MTState","page":"Imaging Metadata","title":"NeuroCore.MTState","text":"Specifies whether the magnetization transfer pulse is applied. This parameter is REQUIRED by all the anatomical images grouped by MTR, MTS and MPM suffixes.\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.MTOffsetFrequency","page":"Imaging Metadata","title":"NeuroCore.MTOffsetFrequency","text":"The frequency offset of the magnetization transfer pulse with respect to the central H1 Larmor frequency in Hertz (Hz).\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.MTPulseBandwidth","page":"Imaging Metadata","title":"NeuroCore.MTPulseBandwidth","text":"The excitation bandwidth of the magnetization transfer pulse in Hertz (Hz).\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.MTNumberOfPulses","page":"Imaging Metadata","title":"NeuroCore.MTNumberOfPulses","text":"Number of magnetization transfer RF pulses applied before the readout.\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.MTPulseShape","page":"Imaging Metadata","title":"NeuroCore.MTPulseShape","text":"Shape of the magnetization transfer RF pulse waveform. Accepted values:\n\nHARD\nGAUSSIAN\nGAUSSHANN (gaussian pulse with Hanning window)\nSINC\nSINCHANN (sinc pulse with Hanning window)\nSINCGAUSS (sinc pulse with Gaussian window)\nFERMI\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.MTPulseDuration","page":"Imaging Metadata","title":"NeuroCore.MTPulseDuration","text":"Duration of the magnetization transfer RF pulse in seconds.\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#Metadata-2","page":"Imaging Metadata","title":"Metadata","text":"","category":"section"},{"location":"imaging_metadata/#","page":"Imaging Metadata","title":"Imaging Metadata","text":"NeuroCore.MagnetizationTransferMetadata","category":"page"},{"location":"imaging_metadata/#NeuroCore.MagnetizationTransferMetadata","page":"Imaging Metadata","title":"NeuroCore.MagnetizationTransferMetadata","text":"MagnetizationTransferMetadata\n\nMetadata structure for information concerning MRI magnetization transfer pulse.\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#Spoiling-1","page":"Imaging Metadata","title":"Spoiling","text":"","category":"section"},{"location":"imaging_metadata/#Properties-4","page":"Imaging Metadata","title":"Properties","text":"","category":"section"},{"location":"imaging_metadata/#","page":"Imaging Metadata","title":"Imaging Metadata","text":"NeuroCore.SpoilingState\nNeuroCore.SpoilingType\nNeuroCore.SpoilingGradientMoment\nNeuroCore.SpoilingGradientDuration","category":"page"},{"location":"imaging_metadata/#NeuroCore.SpoilingState","page":"Imaging Metadata","title":"NeuroCore.SpoilingState","text":"Specifies whether the pulse sequence uses any type of spoiling stratey to suppress transverse magnetization remaining after the readout.\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.SpoilingType","page":"Imaging Metadata","title":"NeuroCore.SpoilingType","text":"Specifies which spoiling method(s) are used by a spoiled sequence. Accepted values: RF, GRADIENT or COMBINED.\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.SpoilingGradientMoment","page":"Imaging Metadata","title":"NeuroCore.SpoilingGradientMoment","text":"Zeroth moment of the spoiler gradient lobe in militesla times second per meter (mT.s/m).\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.SpoilingGradientDuration","page":"Imaging Metadata","title":"NeuroCore.SpoilingGradientDuration","text":"The duration of the spoiler gradient lobe in seconds. The duration of a trapezoidal lobe is defined as the summation of ramp-up and plateu times.\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#Metadata-3","page":"Imaging Metadata","title":"Metadata","text":"","category":"section"},{"location":"imaging_metadata/#","page":"Imaging Metadata","title":"Imaging Metadata","text":"NeuroCore.SpoilingMetadata","category":"page"},{"location":"imaging_metadata/#NeuroCore.SpoilingMetadata","page":"Imaging Metadata","title":"NeuroCore.SpoilingMetadata","text":"SpoilingMetadata\n\nMetadata structure for information concerning MRI sequence spoiling.\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#Time-1","page":"Imaging Metadata","title":"Time","text":"","category":"section"},{"location":"imaging_metadata/#","page":"Imaging Metadata","title":"Imaging Metadata","text":"NeuroCore.EchoTime\nNeuroCore.InversionTime\nNeuroCore.SliceTiming\nNeuroCore.DwellTime\nNeuroCore.DelayTime\nNeuroCore.AcquisitionDuration\nNeuroCore.VolumeTiming\nNeuroCore.RepetitionTime","category":"page"},{"location":"imaging_metadata/#NeuroCore.EchoTime","page":"Imaging Metadata","title":"NeuroCore.EchoTime","text":"The echo time (TE) for the acquisition. This parameter is REQUIRED if corresponding fieldmap data is present or the data comes from a multi echo sequence.\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.InversionTime","page":"Imaging Metadata","title":"NeuroCore.InversionTime","text":"Returns the inversion time (TI) for the acquisition, specified in seconds. Inversion time is the time after the middle of inverting RF pulse to middle of excitation pulse to detect the amount of longitudinal magnetization.\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.SliceTiming","page":"Imaging Metadata","title":"NeuroCore.SliceTiming","text":"The time at which each slice was acquired within each volume (frame) of the acquisition. Slice timing is not slice order – rather, it is a list of times (in JSON format) containing the time (in seconds) of each slice acquisition in relation to the beginning of volume acquisition. The list goes through the slices along the slice axis in the slice encoding dimension (see below). Note that to ensure the proper interpretation of the slice_timing field, it is important to check if the OPTIONAL slice_encoding_direction exists. In particular, if slice_encoding_direction is negative, the entries in slice_timing are defined in reverse order with respect to the slice axis (i.e., the final entry in the slice_timing list is the time of acquisition of slice 0). This parameter is REQUIRED for sparse sequences that do not have the delay_time field set. In addition without this parameter slice time correction will not be possible.\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.DwellTime","page":"Imaging Metadata","title":"NeuroCore.DwellTime","text":"Actual dwell time (in seconds) of the receiver per point in the readout direction, including any oversampling. For Siemens, this corresponds to DICOM field (0019,1018) (in ns). This value is necessary for the optional readout distortion correction of anatomicals in the HCP Pipelines. It also usefully provides a handle on the readout bandwidth, which isn’t captured in the other metadata tags. Not to be confused with effective_echo_spacing, and the frequent mislabeling of echo spacing (which is spacing in the phase encoding direction) as \"dwell time\" (which is spacing in the readout direction).\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.DelayTime","page":"Imaging Metadata","title":"NeuroCore.DelayTime","text":"Returns the user specified time (in seconds) to delay the acquisition of data for the following volume. If the field is not present it is assumed to be set to zero. Corresponds to Siemens CSA header field ldelaytimeInTR. This field is REQUIRED for sparse sequences using the repetitiontime field that do not have the slicetiming field set to allowed for accurate calculation of \"acquisition time\". This field is mutually exclusive with `volumetiming`.\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.AcquisitionDuration","page":"Imaging Metadata","title":"NeuroCore.AcquisitionDuration","text":"Duration (in seconds) of volume acquisition. This field is REQUIRED for sequences that are described with the volume_timingfield and that do not have the slice_timing field set to allowed for accurate calculation of \"acquisition time\". This field is mutually exclusive with repetition_time.\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.VolumeTiming","page":"Imaging Metadata","title":"NeuroCore.VolumeTiming","text":"Returns the time at which each volume was acquired during the acquisition. It is described using a list of times (in JSON format) referring to the onset of each volume in the BOLD series. The list must have the same length as the BOLD series, and the values must be non-negative and monotonically increasing. This field is mutually exclusive with repetitiontime and delaytime. If defined, this requires acquisition time (TA) be defined via either slicetiming or acquisitionduration be defined.\n\n\n\n\n\n","category":"type"},{"location":"imaging_metadata/#NeuroCore.RepetitionTime","page":"Imaging Metadata","title":"NeuroCore.RepetitionTime","text":"Returns the time in seconds between the beginning of an acquisition of one volume and the beginning of acquisition of the volume following it (TR). Please note that this definition includes time between scans (when no data has been acquired) in case of sparse acquisition schemes. This value needs to be consistent with the pixdim[4] field (after accounting for units stored in xyztunits field) in the NIfTI header. This field is mutually exclusive with `volumetiming` and is derived from DICOM Tag 0018, 0080 and converted to seconds.\n\n\n\n\n\n","category":"type"},{"location":"#NeuroCore.jl-1","page":"Introduction","title":"NeuroCore.jl","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"NeuroCore ties together various packages throughout the Julia ecosystem and provides a set of common properties for developing tools related to computational neuroscience. It's aimed at easing the development of neuroscience related software that is compatible across a wide range of disciplines.","category":"page"},{"location":"semantic_positions/#Semantic-Positions-1","page":"Semantic Positions","title":"Semantic Positions","text":"","category":"section"},{"location":"semantic_positions/#","page":"Semantic Positions","title":"Semantic Positions","text":"Modules = [NeuroCore.SemanticPositions]\nOrder   = [:function, :type]","category":"page"},{"location":"semantic_positions/#NeuroCore.SemanticPositions.is_anterior-Tuple{Symbol}","page":"Semantic Positions","title":"NeuroCore.SemanticPositions.is_anterior","text":"is_anterior(x) -> Bool\n\nReturns true if x represent the anterior position.\n\n\n\n\n\n","category":"method"},{"location":"semantic_positions/#NeuroCore.SemanticPositions.is_axial-Tuple{Symbol}","page":"Semantic Positions","title":"NeuroCore.SemanticPositions.is_axial","text":"is_axial(x) -> Bool\n\nReturns true if x represent the axial orientation.\n\n\n\n\n\n","category":"method"},{"location":"semantic_positions/#NeuroCore.SemanticPositions.is_coronal-Tuple{Symbol}","page":"Semantic Positions","title":"NeuroCore.SemanticPositions.is_coronal","text":"is_coronal(x) -> Bool\n\nReturns true if x represent the coronal orientation.\n\n\n\n\n\n","category":"method"},{"location":"semantic_positions/#NeuroCore.SemanticPositions.is_cortical-Tuple{Symbol}","page":"Semantic Positions","title":"NeuroCore.SemanticPositions.is_cortical","text":"is_cortical(::T) -> Bool\n\nReturns true if T represents a cortical region.\n\n\n\n\n\n","category":"method"},{"location":"semantic_positions/#NeuroCore.SemanticPositions.is_csp-Tuple{Symbol}","page":"Semantic Positions","title":"NeuroCore.SemanticPositions.is_csp","text":"is_csp(::T) -> Bool\n\nReturns true if T represents a region of corticospinal fluid (CSP).\n\n\n\n\n\n","category":"method"},{"location":"semantic_positions/#NeuroCore.SemanticPositions.is_gyrus-Tuple{Symbol}","page":"Semantic Positions","title":"NeuroCore.SemanticPositions.is_gyrus","text":"is_gyrus(::T) -> Bool\n\nReturns true if T represents a gyrus.\n\n\n\n\n\n","category":"method"},{"location":"semantic_positions/#NeuroCore.SemanticPositions.is_inferior-Tuple{Symbol}","page":"Semantic Positions","title":"NeuroCore.SemanticPositions.is_inferior","text":"is_inferior(x) -> Bool\n\nReturns true if x represent the inferior position.\n\n\n\n\n\n","category":"method"},{"location":"semantic_positions/#NeuroCore.SemanticPositions.is_left-Tuple{Symbol}","page":"Semantic Positions","title":"NeuroCore.SemanticPositions.is_left","text":"is_left(x) -> Bool\n\nReturns true if x represent the left position.\n\n\n\n\n\n","category":"method"},{"location":"semantic_positions/#NeuroCore.SemanticPositions.is_posterior-Tuple{Symbol}","page":"Semantic Positions","title":"NeuroCore.SemanticPositions.is_posterior","text":"is_posterior(x) -> Bool\n\nReturns true if x represent the posterior position.\n\n\n\n\n\n","category":"method"},{"location":"semantic_positions/#NeuroCore.SemanticPositions.is_right-Tuple{Symbol}","page":"Semantic Positions","title":"NeuroCore.SemanticPositions.is_right","text":"is_right(x) -> Bool\n\nReturns true if x represent the right position.\n\n\n\n\n\n","category":"method"},{"location":"semantic_positions/#NeuroCore.SemanticPositions.is_sagittal-Tuple{Symbol}","page":"Semantic Positions","title":"NeuroCore.SemanticPositions.is_sagittal","text":"is_sagittal(x) -> Bool\n\nReturns true if x represent the sagittal orientation.\n\n\n\n\n\n","category":"method"},{"location":"semantic_positions/#NeuroCore.SemanticPositions.is_sulcus-Tuple{Symbol}","page":"Semantic Positions","title":"NeuroCore.SemanticPositions.is_sulcus","text":"is_sulcus(::T) -> Bool\n\nReturns true if T represents a gyrus.\n\n\n\n\n\n","category":"method"},{"location":"semantic_positions/#NeuroCore.SemanticPositions.is_superior-Tuple{Symbol}","page":"Semantic Positions","title":"NeuroCore.SemanticPositions.is_superior","text":"is_superior(x) -> Bool\n\nReturns true if x represent the superior position.\n\n\n\n\n\n","category":"method"},{"location":"semantic_positions/#NeuroCore.SemanticPositions.is_white_matter-Tuple{Symbol}","page":"Semantic Positions","title":"NeuroCore.SemanticPositions.is_white_matter","text":"is_white_matter(::T) -> Bool\n\nReturns true if T represents white matter.\n\n\n\n\n\n","category":"method"}]
}
